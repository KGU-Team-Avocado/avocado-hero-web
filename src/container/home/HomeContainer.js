import { Link } from "react-router-dom";
import BorderHero from "../../component/home/heroes/BorderHero";
import CenteredHero from "../../component/home/heroes/CenteredHero";
import CenteredScreenshotHero from "../../component/home/heroes/CenteredScreenshotHero";
import ResponsiveLeftAlignedHero from "../../component/home/heroes/ResponsiveLeftAlignedHero";
import VerticallyCenteredHero from "../../component/home/heroes/VerticallyCenteredHero";
import MainTitle from "../../component/home/title/MainTitle";
import './home.css'
import { useEffect, useState } from "react";
import axios from "axios";
import LoadingSpinner from '../../component/common/LodingSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const HomeContainer = () => {
    const [url, setURL] = useState(null)
    useEffect(() => {
        axios.get('/ip').then((response) => {
            console.log(response.status)
            console.log(response.data)
            setURL('http://' + response.data + ':3000')
        })
    }, []);

    const copyURL = () => {
        try {
            navigator.clipboard.writeText(url)
            toast('주소가 클립보드에 복사됐습니다.');
        } catch (error) {
            const ask = window.confirm('http://localhost:3000에서만 복사가 가능합니다. 해당 페이지로 이동하시겠습니까?')
            if (ask) {
                window.location.href = 'http://localhost:3000'
            }
        }
    }

    return (
        <>
            <ToastContainer
                    position="top-center"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                {
                    (
                        url == null
                            ?
                            <LoadingSpinner />
                            :
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <div><strong>알림!</strong></div>
                                <div>모바일에서 테스트하고 싶으시면 <b>스마트폰과 PC를 같은 공유기에 연결 후</b>
                                    <a href={url}>{url}</a> 으로 접속하세요. </div>
                                <button className="btn btn-outline-success" onClick={() => copyURL()}>주소를 클립보드로 복사하기</button>
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                    )

                }
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                    <div><strong>[공지]</strong> 기록 인정을 위해 반드시 로그인 후 작업해주세요.</div>
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>

                <CenteredHero />
                <CenteredScreenshotHero />
                <ResponsiveLeftAlignedHero />
                <VerticallyCenteredHero />
                <BorderHero />
        </>
    )
}

export default HomeContainer;