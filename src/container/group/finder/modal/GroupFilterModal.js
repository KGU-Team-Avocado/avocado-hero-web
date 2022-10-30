import { Box, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material"
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";

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
                            검색하기
                        </Typography>
                        <IconButton size="large" onClick={() => props.setOpen(false)}><ClearIcon fontSize="inherit" /></IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    필터링 기능이 올 곳
                </DialogContent>
                {/* <DialogActions> */}
                <MKButton
                    color="success"
                    // onClick={() => groupApply()}
                    fullWidth
                >
                    위 조건으로 검색하기
                </MKButton>
                {/* </DialogActions> */}
            </Box>
        </>
    )
}