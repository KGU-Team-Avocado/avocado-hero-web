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

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Kit 2 React components
import MKBox from "mui/components/MKBox";
import MKTypography from "mui/components/MKTypography";
import MKSocialButton from "mui/components/MKSocialButton";

// Material Kit 2 React examples
import DefaultNavbar from "mui/examples/Navbars/DefaultNavbar";
import DefaultFooter from "mui/examples/Footers/DefaultFooter";
import FilledInfoCard from "mui/examples/Cards/InfoCards/FilledInfoCard";

// Presentation page sections
import Counters from "mui/pages/Presentation/sections/Counters";
import Information from "mui/pages/Presentation/sections/Information";
import DesignBlocks from "mui/pages/Presentation/sections/DesignBlocks";
import Pages from "mui/pages/Presentation/sections/Pages";
import Testimonials from "mui/pages/Presentation/sections/Testimonials";
import Download from "mui/pages/Presentation/sections/Download";

// Presentation page components
import BuiltByDevelopers from "mui/pages/Presentation/components/BuiltByDevelopers";
// Routes
import routes from "mui/routes";
import footerRoutes from "mui/footer.routes";

// Images
import bgImage from "assets/images/bg-presentation.jpg";


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
        // <div>

        //     <MainTitle />
        //     <div className="container my-3">
        //         <ToastContainer
        //             position="top-center"
        //             autoClose={3000}
        //             hideProgressBar={false}
        //             newestOnTop={false}
        //             closeOnClick
        //             rtl={false}
        //             pauseOnFocusLoss
        //             draggable
        //             pauseOnHover
        //         />
        //         {
        //             (
        //                 url == null
        //                     ?
        //                     <LoadingSpinner />
        //                     :
        //                     <div className="alert alert-warning alert-dismissible fade show" role="alert">
        //                         <div><strong>알림!</strong></div>
        //                         <div>모바일에서 테스트하고 싶으시면 <b>스마트폰과 PC를 같은 공유기에 연결 후</b>
        //                             <a href={url}>{url}</a> 으로 접속하세요. </div>
        //                         <button className="btn btn-outline-success" onClick={() => copyURL()}>주소를 클립보드로 복사하기</button>
        //                         <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        //                     </div>
        //             )

        //         }
        //         <div className="alert alert-success alert-dismissible fade show" role="alert">
        //             <div><strong>[공지]</strong> 기록 인정을 위해 반드시 로그인 후 작업해주세요.</div>
        //             <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        //         </div>
        //     </div>
        //     <div className="container">
        //         <CenteredHero />
        //         <CenteredScreenshotHero />
        //         <ResponsiveLeftAlignedHero />
        //         <VerticallyCenteredHero />
        //         <BorderHero />
        //     </div>
        // </div>
        <>
        {/* 대문 시작 */}
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "top",
                    display: "grid",
                    placeItems: "center",
                }}
            >
                <Container>
                    <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
                        <MKTypography
                            variant="h1"
                            color="white"
                            mt={-6}
                            mb={1}
                            sx={({ breakpoints, typography: { size } }) => ({
                                [breakpoints.down("md")]: {
                                    fontSize: size["3xl"],
                                },
                            })}
                        >
                            아보카도 히어로는...{" "}
                        </MKTypography>
                        <MKTypography
                            variant="body1"
                            color="white"
                            textAlign="center"
                            px={{ xs: 6, lg: 12 }}
                            mt={1}
                        >
                            팀 프로젝트의 처음부터 끝까지<br></br>
                            함께하는 국내 유일의 서비스입니다.
                        </MKTypography>
                    </Grid>
                </Container>
            </MKBox>
        {/* 대문 끝 */}

            <Card
                sx={{
                    p: 2,
                    mx: { xs: 2, lg: 3 },
                    mt: -8,
                    mb: 4,
                    backgroundColor: ({ palette: { white }, functions: { rgba } }) => rgba(white.main, 0.8),
                    backdropFilter: "saturate(200%) blur(30px)",
                    boxShadow: ({ boxShadows: { xxl } }) => xxl,
                }}
            >
                 <CenteredHero />
                 <CenteredScreenshotHero />
                 <ResponsiveLeftAlignedHero />
                 <VerticallyCenteredHero />
                 <BorderHero />
            </Card>
            <MKBox pt={6} px={1} mt={6}>
                <DefaultFooter content={footerRoutes} />
            </MKBox>
        </>
    )
}

export default HomeContainer;