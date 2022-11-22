import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Stack, Typography } from "@mui/material"
import MKButton from "component/common/mui-components/MKButton"
import UserProfileCard from "component/jobFinder/UserProfileCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileViewModal from "component/jobFinder/modal/ProfileViewModal";
import ModalStaticBackdrop from "component/common/modal/ModalStaticBackdrop";

export default () => {

    const navigate = useNavigate();
    const [profileCardModalOpen, setProfileCardModalOpen] = useState(false);

    const handleUserProfileCard = () => {
        setProfileCardModalOpen(true);
    }

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
                        <Grid item xs={12} xl={6}>
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
                                    <MKButton variant="contained" color="info" size="large" onClick={() => navigate('/humanResources')}>인재 찾으러 가기</MKButton>
                                    <MKButton variant="outlined" color="secondary" size="large" onClick={() => navigate('/prices')}>채용 공고하러 가기</MKButton>
                                </Stack>

                            </Stack>
                        </Grid>
                        <Grid item xs={12} xl={6}>
                            
                            <Stack
                                m={2}
                            >
                                <UserProfileCard
                                    user={{ user_id: 'hero', name: '히어로' }}
                                    handleUserProfileCard={handleUserProfileCard}
                                />
                            </Stack>
                        </Grid>
                    </Grid>
                </Card>
            </Stack>
            <ModalStaticBackdrop
                keepMounted
                width="xl"
                open={profileCardModalOpen}
                component={
                    <ProfileViewModal
                        setOpen={setProfileCardModalOpen}
                        profile={{
                              "user_id": "hero",
                              "user_password": "1234",
                              "name": "히어로",
                              "email": "avocado@gmail.com",
                              "type": "개인",
                              "phoneNumber": "010-0000-0000",
                              "age": "25",
                              "nickname": "아보카도히어로",
                              "imgURL": "undefined",
                              "belongs": ["아보카도 대학교"],
                              "fields": [],
                              "links": ["https://github.com/avocado"],
                              "introduce": "팀 프로젝트의 처음부터 끝까지 함께하는 국내 유일의 서비스입니다.",
                              "keywords": ["react", "java"],
                              "personalities": ["creative", "cautious"],
                              "groups": [],
                              "introduceOne": "아보카도 히어로",
                        }} />
                }
            />
        </>
    )
}