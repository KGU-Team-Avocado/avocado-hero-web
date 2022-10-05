// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";

import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import BootstrapDialog, { BootstrapDialogTitle } from '../dialog/BootstrapDialog';

const NoticeModal = ({ show, title, description, modifyNotice, saveNewNotice, isEdit, inputTitle, inputDesc, handleClose }) => {
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={show}
    >
      <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
        공지사항 작성
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
          <div>
            <TextField
              required
              id="outlined-required"
              label="공지 제목"
              defaultValue={title}
              inputRef={inputTitle}
            />
          </div>

          <div>
            <TextField
              required
              id="outlined-multiline-static"
              label="공지 내용"
              multiline
              rows={10}
              defaultValue={description}
              inputRef={inputDesc}
            />
          </div>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>취소</Button>
        {isEdit ?
          <Button autoFocus onClick={() => modifyNotice()}>수정</Button>
          :
          <Button autoFocus onClick={() => saveNewNotice()}>저장</Button>
        }
      </DialogActions>
    </BootstrapDialog>
  )
}

export default NoticeModal;