import { Box, DialogContent, DialogTitle, IconButton, Typography } from "@mui/material";
import ClearIcon from '@mui/icons-material/Clear';
import MKButton from "component/common/mui-components/MKButton";

const OrganizationCreateModal = (props) => {
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
                            조직 만들기
                        </Typography>
                        <IconButton
                            size="large"
                            onClick={() => {
                                props.setOpen(false);
                            }}>
                            <ClearIcon fontSize="inherit" />
                        </IconButton >
                    </Box>
                </DialogTitle>
                <DialogContent dividers={true}>
                    
                </DialogContent>
                {/* <DialogActions> */}
                <MKButton
                    color="success"
                    // onClick={() => groupApply()}
                    fullWidth
                >
                    만들기
                </MKButton>
                {/* </DialogActions> */}
            </Box>
        </>
    )
}

export default OrganizationCreateModal;