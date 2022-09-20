import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import InputStartDay from "./InputStartDay";
import InputEndDay from "./InputEndDay";
import SelectColor from "./SelectColor";

const CalendarModal = ({show, allday, startDay, endDay, daysOfWeek, color, inputTitle, inputDesc, DayOfTheWeek, handleSave, handleClose, changeHandler, handleStartDay, handleEndDay, handleAllDay, handleColor}) => {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <InputStartDay
                        allday={allday}
                        startDay={startDay}
                        endDay={endDay}
                        handleStartDay={handleStartDay}
                    />

                    <InputEndDay 
                        allday={allday}
                        startDay={startDay}
                        endDay={endDay}
                        handleEndDay={handleEndDay}
                    />

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                        <Form.Label>제목</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="title"
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
                            ref={inputDesc} />
                    </Form.Group>

                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        checked={allday}
                        onChange={() => handleAllDay(!allday)}
                        label="하루종일"
                    />

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput4" value={daysOfWeek} >
                        <Form.Label>반복</Form.Label>
                        <div key={`inline-checkbox`} className="mb-3">
                            {DayOfTheWeek.map((day) => (
                                <Form.Check
                                    key={day.value}
                                    inline
                                    label={day.name}
                                    name="group1"
                                    type="checkbox"
                                    id={day.value}
                                    onChange={(e) => {
                                        changeHandler(e.currentTarget.checked, day.value)
                                    }}
                                />
                            ))}
                        </div>

                    </Form.Group>

                    <SelectColor 
                        color={color}
                        handleColor={handleColor}
                    />
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={handleSave}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default CalendarModal;