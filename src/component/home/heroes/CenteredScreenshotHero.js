import { Grid, Stack, Typography } from "@mui/material"
import MKButton from "component/common/mui-components/MKButton"

export default () => {
    return (
        <>
            <Stack
                align="center"
                my={5}
                px={4}
                pt={5}
                spacing={3}
                sx={{ borderBottom: 1 }}
            >
                <Typography variant="h1">
                    아직도 팀플 조를 랜덤으로 구성하시나요?
                </Typography>
                <Typography>
                    원하는 사람들과 만나 팀을 구성하고 팀플 워크스페이스를 활용하여... 가나다라마바사아자차카타파하
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
                    <MKButton variant="contained" color="warning" size="large">팀플 워크스페이스 구경하기</MKButton>
                    <MKButton variant="outlined" color="dark" size="large">Secondary</MKButton>
                </Stack>
                <div className="overflow-hidden" style={{ "maxHeight": "30vh" }}>
                    <div className="container px-5">
                        <img src="bootstrap-docs.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </Stack>
        </>

    )
}