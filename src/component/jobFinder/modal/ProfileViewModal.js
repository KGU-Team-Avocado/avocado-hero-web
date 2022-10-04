import { Box, Button, DialogActions, DialogContent, DialogTitle, IconButton, Stack, Typography } from "@mui/material";
import { BiBookmark } from "react-icons/bi";
import { Link } from "react-router-dom";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import ProfileCard from "container/sign/profile/ProfileCard";

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
                {/* <DialogActions> */}
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                >
                    <MKButton variant="contained" color="info" fullWidth>제의하기</MKButton>
                </Stack>
                {/* </DialogActions> */}
            </Box>
        </>
    )
}