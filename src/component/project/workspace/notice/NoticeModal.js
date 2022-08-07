import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

const NoticeModal = ({ show, title, description, modifyNotice, saveNewNotice, isEdit, inputTitle, inputDesc, handleClose }) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>새 공지사항</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>제목</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="title"
                            defaultValue={title}
                            ref={inputTitle}
                            autoFocus
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>설명</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder="description"
                            defaultValue={description}
                            ref={inputDesc} />
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="danger" onClick={handleClose}>취소</Button>
                {isEdit ?
                    <Button variant="primary" onClick={() => modifyNotice()}>수정</Button>
                    :
                    <Button variant="primary" onClick={() => saveNewNotice()}>저장</Button>
                }
            </Modal.Footer >
        </Modal >
    )
}

export default NoticeModal;