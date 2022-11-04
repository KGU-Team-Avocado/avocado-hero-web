import { Box, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";

export default ({ priceContents, setOpen }) => {

    const user = useSelector(selectUser);

    return (
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
                        신청하기
                    </Typography>
                    <IconButton size="large" onClick={() => setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                </Box>
            </DialogTitle>
            <DialogContent dividers={true}>
                
            </DialogContent>
            <MKButton
                color="success"
                onClick={() => console.log(priceContents)}
                fullWidth
                disabled={user === null}
            >
                구독하기
            </MKButton>
        </Box>
    )
}