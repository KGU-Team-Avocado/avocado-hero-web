import { Box, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";
import { useSelector } from "react-redux";
import { selectUser } from "api/redux/user/userSlice";
import * as API from "../../api/API";

export default ({ priceContents, setOpen }) => {

    const user = useSelector(selectUser);

    const purchasePlan = (user_id, type) => {
        console.log(user_id,type)
        API.updateUserType(user_id,type);
        window.location.href=`/avocado-hero-web/user/${user_id}`;
    }

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
                <Typography>{API.typeName(priceContents?.type)}요금제에 대한 설명이 등장해야 하는 부분</Typography>
            </DialogContent>
            <MKButton
                color="success"
                onClick={() => purchasePlan(user?.user_id, priceContents?.type)}
                fullWidth
                disabled={user === null}
            >
                구독하기
            </MKButton>
        </Box>
    )
}