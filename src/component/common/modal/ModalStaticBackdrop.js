import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

export default function ModalStaticBackdrop(props) {
  const { width, component, open, ...other } = props;

  return (
    <Dialog
      sx={{ '& .MuiDialog-paper': { borderRadius: '1rem' } }}
      maxWidth={width}
      open={open}
      {...other}
    >
      {component}
    </Dialog>
  );
}
