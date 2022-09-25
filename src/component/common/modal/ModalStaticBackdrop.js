import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export default function ModalStaticBackdrop(props) {
  const { width, component, open, ...other } = props;

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { borderRadius: '1rem', width:"100%" } }}
      maxWidth={width}
      open={open}
      scroll={"body"}
      {...other}
    >
      {component}
    </Dialog>
  );
}
