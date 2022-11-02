import Button from '@mui/material/Button';
import Form from "react-bootstrap/Form";
import InputStartDay from "./InputStartDay";
import InputEndDay from "./InputEndDay";
import SelectColor from "./SelectColor";
import BootstrapDialog, { BootstrapDialogTitle } from "../dialog/BootstrapDialog";
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Box from '@mui/material/Box';

const CalendarModal = ({ show, allday, startDay, endDay, daysOfWeek, color, inputTitle, inputDesc, DayOfTheWeek, handleSave, handleClose, changeHandler, handleStartDay, handleEndDay, handleAllDay, handleColor }) => {
    return (
        <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={show}
        >
            <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                새로운 일정 추가
            </BootstrapDialogTitle>
            <DialogContent dividers>
                <Box
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '60ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
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
                </Box>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>취소</Button>
                <Button autoFocus onClick={handleSave}>추가</Button>
            </DialogActions>
        </BootstrapDialog>
    )
}

export default CalendarModal;