import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export default function ModalStaticBackdrop(props) {
  const { onClose, component, open, ...other } = props;

  // const handleCancel = () => {
  //   onClose();
  // };

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { width: '80%', maxHeight: 435 } }}
      maxWidth="xs"
      // TransitionProps={{ onEntering: handleEntering }}
      open={open}
      {...other}
    >
      {/* <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-body p-5  w-100"> */}
            {component}
          {/* </div>
        </div>
      </div> */}
    </Dialog>
  );
}

// ModalStaticBackdrop.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
// };
