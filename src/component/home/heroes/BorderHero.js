import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material"
import MKButton from "component/common/mui-components/MKButton"
import UserProfileCard from "component/jobFinder/UserProfileCard";
import { useNavigate } from "react-router-dom";

export default () => {

    const navigate = useNavigate();

    return (
        <>

            <Stack>
                <Card
                    sx={{
                        p: {
                            xs: 2,
                            sm: 5,
                            md: 7,
                            lg: 10,
                            xl: 11,
                            xxl: 12
                        },
                    }}
                >
                    <Grid container spacing={2} alignItems="center">
                        <Grid xs={12} lg={6}>
                            <Stack
                                sx={{ alignItems: 'center' }}
                                spacing={3}
                                m={2}
                            >
                                <Typography variant="h1">
                                    좋은 사람 있으면 소개해줘
                                </Typography>
                                <Typography>
                                    프로필을 직접 확인해보고 우리 기업과 맞는 좋은 개발자를 찾게되면 직접 제의를 할 수 있습니다.
                                </Typography>
                                <Stack
                                    direction={{ xs: "column", sm: "row" }}
                                    spacing={1}
                                    justifyContent="center"
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
                                    <MKButton variant="contained" color="info" size="large" onClick={() => navigate('/')}>인재 찾으러 가기</MKButton>
                                    <MKButton variant="outlined" color="secondary" size="large" onClick={() => navigate('/')}>채용 공고하러 가기</MKButton>
                                </Stack>

                            </Stack>
                        </Grid>
                        <Grid xs={12} lg={6}>
                            <Stack
                                m={2}
                            >
                                <UserProfileCard
                                    user={{ user_id: 'gabrielyoon7', name: '윤주현' }}
                                    handleUserProfileCard={null}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </Card>
            </Stack>
        </>
    )
}