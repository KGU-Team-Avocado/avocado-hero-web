import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import ProfileCard from "container/sign/profile/view/ProfileCard";

export default (props) => {

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
                    // width:"100%"
                }}
            >
                <DialogTitle id="scroll-dialog-title">
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant="h3">
                            프로필
                        </Typography>
                        <IconButton size="large" onClick={() => props.setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    {
                        props.profile &&
                        <ProfileCard
                            profile={props.profile}
                        />
                    }
                </DialogContent>
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <MKButton variant="contained" color="light" fullWidth>프로젝트 팀원으로 제의하기</MKButton>
                    <MKButton variant="contained" color="success" fullWidth>채용 제의하기</MKButton>
                </Stack>
            </Box>
        </>
    )
}