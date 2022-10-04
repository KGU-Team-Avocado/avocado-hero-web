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
                <CenteredHero />
                <CenteredScreenshotHero />
                <ResponsiveLeftAlignedHero />
                <VerticallyCenteredHero />
                <BorderHero />
        </>
    )
}

export default HomeContainer;