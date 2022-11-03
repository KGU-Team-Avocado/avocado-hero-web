import { Box, Container, Grid, Stack, Typography } from "@mui/material"
import SignIn from "container/sign/sign_in/SignIn"

export default () => {
    return (
        <>
            <Container maxWidth="sm">
                <Stack
                    my={5}
                    px={4}
                    spacing={3}
                >
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} xl={7}>
                            <Typography variant="h1">히어로, 오늘 팀 일정 알려줘</Typography>
                            <Typography>
                                더이상의 왔다갔다 시간낭비는 NO!! 팀 일정을 오직 한 곳에서 관리하세요
                                팀 전체 공유 일정을 통해 팀원 간의 불필요한 소통을 줄이세요
                                예정된 데드라인 등 중요한 날짜를 다시는 놓치지 마세요
                                중요한 정보를 정리하고 체계화해 관리해 보세요
                            </Typography>
                        </Grid>
                        <Grid item xs={12} xl={5}>
                            <Box maxWidth={400}>
                                <SignIn />
                            </Box>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </>
    )
}