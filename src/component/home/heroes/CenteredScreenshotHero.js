import { Grid, Stack, Typography } from "@mui/material"
import MKButton from "component/common/mui-components/MKButton"
import image1 from '../../../assets/img/1.png';

export default ({navigate}) => {
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
                <Typography variant="h2">
                    아직도 팀플 조를 랜덤으로 구성하시나요?
                </Typography>
                <Typography>
                    원하는 사람들과 만나 팀을 구성하고 워크스페이스를 활용하여 팀 활동을 관리하세요. 모르는 사람도 마음에 드신다면 하나의 그룹으로 매칭될 수 있도록 서로 지원하세요.
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
                    <MKButton variant="contained" color="warning" size="large" onClick={()=>navigate('/groupFinder')}>프로젝트 찾기</MKButton>
                    <MKButton variant="outlined" color="dark" size="large" onClick={()=>navigate('/workspace/630b7190409e908dbc8a1633')}>워크스페이스 구경하기</MKButton>
                </Stack>
                <div className="overflow-hidden" style={{ "maxHeight": "30vh" }}>
                    <div className="container px-5">
                        <img src={image1} className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy" />
                    </div>
                </div>
            </Stack>
        </>

    )
}