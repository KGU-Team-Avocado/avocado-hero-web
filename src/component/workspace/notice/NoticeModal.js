// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
// import Form from "react-bootstrap/Form";

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

const NoticeModal = ({ show, title, description, modifyNotice, saveNewNotice, isEdit, inputTitle, inputDesc, handleClose }) => {
    return (
        // <Modal
        //     show={show}
        //     onHide={handleClose}
        //     backdrop="static"
        //     keyboard={false}>
        //     <Modal.Header closeButton>
        //         <Modal.Title>새 공지사항</Modal.Title>
        //     </Modal.Header>

        //     <Modal.Body>
        //         <Form>
        //             <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
        //                 <Form.Label>제목</Form.Label>
        //                 <Form.Control
        //                     type="text"
        //                     placeholder="title"
        //                     defaultValue={title}
        //                     ref={inputTitle}
        //                     autoFocus
        //                 />
        //             </Form.Group>

        //             <Form.Group
        //                 className="mb-3"
        //                 controlId="exampleForm.ControlTextarea1"
        //             >
        //                 <Form.Label>설명</Form.Label>
        //                 <Form.Control
        //                     as="textarea"
        //                     rows={3}
        //                     placeholder="description"
        //                     defaultValue={description}
        //                     ref={inputDesc} />
        //             </Form.Group>
        //         </Form>
        //     </Modal.Body>

        //     <Modal.Footer>
        //         <Button variant="danger" onClick={handleClose}>취소</Button>
        //         {isEdit ?
        //             <Button variant="primary" onClick={() => modifyNotice()}>수정</Button>
        //             :
        //             <Button variant="primary" onClick={() => saveNewNotice()}>저장</Button>
        //         }
        //     </Modal.Footer >
        // </Modal >
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
                            ref={inputTitle}
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
                            ref={inputDesc}
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
                {/* <Button autoFocus onClick={handleClose}>
                    Save changes
                </Button> */}
            </DialogActions>
        </BootstrapDialog>
    )
}

export default NoticeModal;