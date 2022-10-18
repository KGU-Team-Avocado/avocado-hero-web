import { Grid, Stack, Typography } from "@mui/material"
import MKButton from "component/common/mui-components/MKButton"
import { Navigate, useNavigate } from "react-router-dom"

export default ({navigate}) => {
    return (
        <>
            <Stack align="center">
                <img className="d-block mx-auto mb-4" src="/docs/5.2/assets/brand/bootstrap-logo.svg" alt="프로필 예제 화면 사진이 올 자리" width="500" height="50" />
            </Stack>
            <Stack
                align="center"
                sx={{
                    px: {
                        xs: 2,
                        sm: 5,
                        md: 7,
                        lg: 10,
                        xl: 11,
                        xxl: 12
                    },
                }}
                spacing={5}
            >
                <Typography variant="h1">포트폴리오, 더이상 혼자 고민하지 마세요!</Typography>
                <Typography>포트폴리오 관리에 어려움이 있으신가요? 히어로에서 활동하시면 여러분의 활동 기록을 자동으로 상세하게 관리해드립니다!</Typography>
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
                    <MKButton variant="contained" color="success" size="large" onClick={()=>navigate('/user/gabrielyoon7')}>포트폴리오 예제 구경하기</MKButton>
                    <MKButton variant="outlined" color="secondary" size="large" onClick={()=>navigate('/signup')}>회원가입 하기</MKButton>
                </Stack>
            </Stack>
        </>
    )
}