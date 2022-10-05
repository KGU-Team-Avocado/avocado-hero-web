import { Box, Dialog, DialogActions, DialogContent } from "@mui/material";
import BootstrapDialog, { BootstrapDialogTitle } from "../dialog/BootstrapDialog";

const memberModal = ({show, handleClose, title, body, footer}) => {
    return (
        <Dialog
            onClose={handleClose}
            // aria-labelledby="customized-dialog-title"
            open={show !== 'null'}
            maxWidth='xs'
            fullWidth={true}
        >
            <BootstrapDialogTitle id="customized-dialo  g-title" onClose={handleClose}>
                {title}
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '60ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    {body}
                </Box>
            </DialogContent>
            <DialogActions>
                {footer}
            </DialogActions>
        </Dialog>
    )
}

export default memberModal;