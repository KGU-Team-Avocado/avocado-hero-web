import { Alert, Divider, Stack, Typography } from "@mui/material"

export default ({ group_id }) => {
    // group_id를 가지고 서버에서 정보를 조회해서 readme를 수신받고 그려줘야함
    return (
        <Stack>
            <Alert>{group_id}이 자리에는 그룹에서 설정한 Read Me를 띄워줄 예정임</Alert>
            <Typography variant="h5">팀명</Typography>
            <Typography>ㅇㅇ</Typography>
            <Divider />
            <Typography variant="h5">프로젝트명</Typography>
            <Typography>ㅇㅇ</Typography>
            <Divider />
            <Typography variant="h5">요약</Typography>
            <Typography>ㅇㅇ</Typography>
            <Divider />
            <Typography variant="h5">태그</Typography>
            <Typography>ㅇㅇ</Typography>
            <Divider />
            <Typography variant="h5">팀장</Typography>
            <Typography>ㅇㅇ</Typography>
            <Divider />
            <Typography variant="h5">인원수</Typography>
            <Typography>ㅇㅇ</Typography>
            <Divider />
            <Typography variant="h5">상태</Typography>
            <Typography>ㅇㅇ</Typography>
            <Divider />
            <Typography variant="h5">프로젝트 기간</Typography>
            <Typography>ㅇㅇ</Typography>
            <Divider />
            <Typography variant="h5">리드미</Typography>
            <Typography>ㅇㅇ</Typography>
        </Stack>
    )
}