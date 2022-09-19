import { Container, Grid } from "@mui/material"
import MKBox from "mui/components/MKBox";
import MKTypography from "mui/components/MKTypography"
import { useLocation } from "react-router-dom";

// Images
import bgImage from "assets/images/bg2.jpg";


export default () => {
    const router = useLocation();
    console.log('pathname' + router.pathname)

    return (
        <>
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
        </>
    )
}