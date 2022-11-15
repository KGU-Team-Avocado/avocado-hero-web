import { Alert, Box, Button, Chip, Grid, LinearProgress, Stack, Typography } from "@mui/material";
import ResponsiveCard from "component/common/ResponsiveCard";
import PaidIcon from '@mui/icons-material/Paid';
import { useEffect, useState } from "react";
const Funding = () => {
    const [funding, setFunding] = useState({
        now: 0,
        goal: 1,
        sponsors: 0,
        hearts: 0,
    });
    useEffect(() => {
        setGraph();
    },[]);
    const setGraph = () => {
        setFunding({
            now: 25000,
            goal: 50000,
            sponsors: 10,
            hearts: 100
        });
    };
    return (
        <Stack spacing={2}>
            <Typography variant="h5"><PaidIcon />펀딩</Typography>
            <Alert>
                프로젝트에서 제품을 만들 계획이신가요? 여러 사람들에게 펀딩 받으세요.
            </Alert>
            <Grid
                container
                rowSpacing={{ xs: 1, sm: 1, md: 2 }}
                columnSpacing={{ sm: 1, md: 2 }}
            >
                <Grid item xs={12} md={6}>
                    <ResponsiveCard>
                        <Grid container>
                            <Grid item xs={12} md={5}>
                                <Stack
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <Box
                                        sx={{
                                            width: 150,
                                            height: 150,
                                            backgroundColor: 'gray',
                                            '&:hover': {
                                                backgroundColor: 'gray.dark',
                                                opacity: [0.9, 0.8, 0.7],
                                            },
                                        }}
                                    />
                                </Stack>

                            </Grid>
                            <Grid item xs={12} md={7}>
                                <Chip label={"웹서비스"} />
                                <Typography variant="h5">{"그룹지원프로그램"}</Typography>
                                <Typography variant="h6">{"히어로"}</Typography>
                                <Typography>{"저희를 후원하시고 다음에 싼 가격으로 이용하셈"}</Typography>
                                <Stack
                                    direction="row"
                                    justifyContent="end"
                                    alignItems="center"
                                    spacing={2}
                                >

                                    <Button variant="contained" onClick={()=>setFunding({
                                        ...funding,
                                        now:funding.now+1000
                                    })}>후원하기</Button>
                                </Stack>
                            </Grid>
                        </Grid>
                    </ResponsiveCard>
                </Grid>
                <Grid item xs={12} md={6}>
                    <ResponsiveCard>
                        <Typography variant="h5">모금액</Typography>
                        <LinearProgress variant="determinate" value={funding.now / funding.goal * 100 > 100 ? 100:funding.now / funding.goal * 100} />
                        <Typography variant="h6">💵 {funding.now}/{funding.goal}원</Typography>
                        <Typography variant="h6">✅ {(funding.now / funding.goal * 100).toFixed(1)}% 달성</Typography>
                        <Typography variant="h6">👨‍👩‍👧‍👦 {funding.sponsors}명의 참여</Typography>
                        <Typography variant="h6">❤️ {funding.hearts}명의 관심</Typography>
                        <Typography variant="h6">🎖️ 2022.11.16 ~ 2022.12.01</Typography>
                    </ResponsiveCard>
                </Grid>
            </Grid>
        </Stack>
    );
};

export default Funding;