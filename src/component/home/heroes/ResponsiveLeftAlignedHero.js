import { useHref, useNavigate } from "react-router-dom"
import MKButton from "component/common/mui-components/MKButton"
import { Container, Grid, Stack, Typography } from "@mui/material"
import image2 from '../../../assets/img/2.png';

export default ({ navigate }) => {
    return (
        <>
            <Container maxWidth="sm">
                <Stack
                    my={5}
                    px={4}
                    spacing={3}
                >
                    <Grid container spacing={2} alignItems="center">
                        <Grid xs={12} lg={6}>
                            <Typography variant="h1">당신과 딱 맞는 회사를 찾아보세요!</Typography>
                            <Typography>히어로가 일자리를 소개합니다. 당신과 딱 맞는 일자리를 찾아보고 당신의 포토폴리오로 당신이 인재임을 증명해보세요!</Typography>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={1}
                                justifyContent="start"
                                sx={{
                                    xs: {
                                        display: 'grid',
                                    },
                                    sm: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                    }
                                }}
                            >
                                <MKButton variant="contained" color="success" size="large" onClick={() => navigate("/jobFinder")}>일자리 찾기</MKButton>
                                <MKButton variant="outlined" color="secondary" size="large">default</MKButton>
                            </Stack>
                        </Grid>
                        <Grid xs={12} lg={6}>
                            <img src={image2} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </>
    )
}
