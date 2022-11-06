import { useEffect, useState } from "react"
import { Box, DialogContent, DialogTitle, Divider, IconButton, Stack, TextField, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectedGroup } from "api/redux/group/groupSlice";
import Readme from "./Readme";

export default ({ group, setOpen }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGroupCard = (group) => {
        // alert(JSON.stringify(group))
        if (window.confirm(`${group.project_name}으로 이동하시겠습니까?`)) {
            //dispatch(selectedGroup(group));
            navigate(`/workspace/${group._id}`);
        }
    }

    return (
        <>
            <Box
                sx={{
                    p: {
                        xs: 1,
                        sm: 2,
                        md: 3,
                        lg: 4,
                        xl: 5,
                        xxl: 6
                    },
                }}
            >
                <DialogTitle id="scroll-dialog-title">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h4" >
                            {group?.project_name}의 Read Me
                        </Typography>
                        <IconButton size="large" onClick={() => setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <Stack spacing={1}>
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
                        <Readme group_id={group?._id} />
                    </Stack>
                </DialogContent>
                <MKButton color="success" onClick={() => handleGroupCard(group)} fullWidth>워크스페이스로 이동하기</MKButton>
            </Box>
        </>
    )
}