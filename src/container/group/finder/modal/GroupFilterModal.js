import { Box, DialogContent, DialogTitle, IconButton, Stack, TextField, Typography } from "@mui/material"
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
                    <Stack spacing={2}>
                        <TextField label="팀명" />
                        <TextField label="프로젝트명" />
                        <TextField label="팀장 아이디" />
                        <TextField label="태그" />
                    </Stack>
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