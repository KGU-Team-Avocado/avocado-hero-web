import { Alert, Stack, Typography } from "@mui/material"

const Readme = ({ group_id }) => {
    // group_id를 가지고 서버에서 정보를 조회해서 readme를 수신받고 그려줘야함
    return (
        <Stack>
            <Alert>{group_id}이 자리에는 그룹에서 설정한 Read Me를 띄워줄 예정임</Alert>
            <Typography variant="h5">리드미가 올 자리</Typography>
            <Typography>ㅇㅇ</Typography>
        </Stack>
    )
}

export default Readme;