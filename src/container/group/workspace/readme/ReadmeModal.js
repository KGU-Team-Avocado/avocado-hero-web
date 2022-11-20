import React from "react"
import { Box, DialogContent, DialogTitle, Divider, IconButton, Stack, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import { useNavigate } from "react-router-dom";
import Readme from "./Readme";
import GroupInfo from "component/group/common/GroupInfo";
import BadgeStack from "component/common/BadgeStack";

const ReadmeModal = ({ group, setOpen }) => {

    const navigate = useNavigate();

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
                            {group?.project_name}
                        </Typography>
                        <IconButton size="large" onClick={() => setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    <GroupInfo group={group} />
                    <Divider />
                    <Readme group_id={group?._id} />
                    <Divider />
                    <Typography variant="h5">
                        Tech Stack
                    </Typography>
                    <BadgeStack type='tech' stack={group ? group.tech_stack : []} />
                </DialogContent>
                <MKButton color="success" onClick={() => handleGroupCard(group)} fullWidth>워크스페이스로 이동하기</MKButton>
            </Box>
        </>
    )
}

export default ReadmeModal;