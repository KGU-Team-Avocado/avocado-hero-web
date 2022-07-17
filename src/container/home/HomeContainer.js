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

const HomeContainer = () => {
    const [url, setURL] = useState(null)
    useEffect(() => {
        axios.get('/ip').then((response) => {
            console.log(response.status)
            console.log(response.data)
            setURL('http://' + response.data + ':3000')
        })
    }, []);
    return (
        <div>
            {
                    (
                        url == null
                            ?
                            <LoadingSpinner />
                            :
                            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>알림!</strong> 모바일에서 테스트하고 싶으시면 <b>스마트폰과 PC에서 같은 공유기에 연결 후</b> <a href={url}>{url}</a> 으로 접속하세요
                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                    )
                    
            }
            <MainTitle />
            {/* divider 조만간 삭제 예정. 경계명 보여주기 위해 넣음 */}
            {/* <div className="b-example-divider"></div> */}
            <CenteredHero />
            {/* <div className="b-example-divider"></div> */}
            <CenteredScreenshotHero />
            {/* <div className="b-example-divider"></div> */}
            <ResponsiveLeftAlignedHero />
            <VerticallyCenteredHero />
            <BorderHero />
        </div>
    )
}

export default HomeContainer;