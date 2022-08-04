import { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react" // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid" // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { Tooltip } from "bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Badge from 'react-bootstrap/Badge';

const ProjecCalendarContainer = () => {
    const [show, setShow] = useState(false);
    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [allday, setAllday] = useState(false);
    const [daysOfWeek, setDaysOfWeek] = useState("");
    const [backgroundColor, setBackgroundColor] = useState("");
    const [events, setEvents] = useState([{
        id: '0',  // 매주 반복하는 일정
        title: "All Day Event very long title",
        description: "description for All Day Event1",
        daysOfWeek: ["4"],
        startTime: "10:45:00",
        endTime: "12:45:00",
        color: "red"
    },
    {
        id: '1', // 하루 일정 (종일)
        title: "Long Event",
        description: "description for All Day Event2",
        date: "2022-07-11",
        start: "2022-07-11",
        end: "2022-07-12",
        backgroundColor: "rgba(62, 121, 37)"
    },
    {
        id: '2', // 하루 일정 (특정 시간)
        title: "Long Event",
        description: "description for All Day Event3",
        start: "2022-07-11T10:45:00",
        end: "2022-07-11T11:45:00",
        backgroundColor: "red"
    },
    {
        id: '3', // 긴 일정
        groupId: "blueEvents",
        title: "DTS STARTS",
        description: "description for All Day Event4",
        start: "2022-07-10T10:45:00",
        end: "2022-07-13T10:45:00",
    }]);

    const handleDateClick = (arg) => { // bind with an arrow function
        console.log(arg)
        setStartDay(arg.startStr);
        setEndDay(arg.endStr);
        setAllday(arg.allDay);
    }

    const handleSave = () => {
        const id = events[events.length - 1].id + 1;
        const newEvent = {
            id: id,
            title: title,
            description: description,
            start: startDay,
            end: endDay,
            backgroundColor: backgroundColor
        };
        setEvents([...events, newEvent]);
        setStartDay("");
        setEndDay("");
        setAllday("");
        setBackgroundColor("");
        setDaysOfWeek("");
        setDescription("");
        setTitle("");
        setShow(false);
    }

    const handleClose = () => {
        setStartDay("");
        setEndDay("");
        setAllday("");
        setBackgroundColor("");
        setDaysOfWeek("");
        setDescription("");
        setTitle("");
        setShow(false);
    }

    const handleShow = () => {setShow(true);};

    return (
        <>
            <div className="mt-3">
                <div className="calendar-container">
                    <FullCalendar
                        plugins={[dayGridPlugin, timeGridPlugin, listPlugin, interactionPlugin, bootstrap5Plugin]}
                        initialView="dayGridMonth"
                        events={events}
                        contentHeight={700}
                        selectable={true}
                        select={handleDateClick} //여러 날짜 드래그로 선택
                        editable={true} // 일정 드래그앤드롭으로 변경 (allday가 아닌 일정은 늘리고 줄이기 불가)
                        droppable={true}
                        dayMaxEventRows={true}  // 하루에 보여지는 일정 수 조정(나머지는 +n 으로 표시)
                        customButtons={{
                            createNewEvent: {
                                text: "새일정",
                                click: function () { handleShow() }
                            }
                        }}
                        headerToolbar={{
                            left: "prevYear,prev today createNewEvent",
                            center: "title",
                            right: "dayGridMonth,timeGridWeek,listWeek next,nextYear"
                        }}
                        eventResizableFromStart={true}
                        themeSystem={"bootstrap5"}
                        eventDrop={(info) => {  // 일정 드래그앤드롭으로 변경할 때 발생하는 이벤트
                            alert(info.event.id + " was dropped on " + info.event.start.toISOString());

                            if (!window.confirm("Are you sure about this change?")) {
                                info.revert();
                            }else {
                                setEvents(events.map((event) => event.id === info.event.id ? {...event, start: info.event.startStr, end: info.event.endStr} : event))
                            }
                        }}
                        eventResize={(info) => { // 일정 기간 조정 시 발생하는 이벤트
                            alert(info.event.title + " end is now " + info.event.end.toISOString());
                            console.log(info.event.id)

                            if (!window.confirm("is this okay?")) {
                                info.revert();
                            }else {
                                setEvents(events.map((event) => event.id === info.event.id ? {...event, start: info.event.startStr, end: info.event.endStr} : event))
                            }
                        }}
                        eventDidMount={(info) => {
                            var tooltip = new Tooltip(info.el, {
                                title: info.event.extendedProps.description,
                                placement: "top",
                                trigger: "hover",
                                container: "body"
                            });
                        }}
                        eventClick={(info) => {
                            if (!window.confirm("삭제하시겠습니까?")) {
                                info.revert();
                            } else {
                                setEvents(events.filter((event) => event.id !== info.event.id))
                            }
                        }}
                    />
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
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>시작일</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="start day"
                                        value={startDay}
                                        onChange={(e) => setStartDay(e.target.value)}
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput12">
                                    <Form.Label>종료일</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="end day"
                                        value={endDay}
                                        onChange={(e) => setEndDay(e.target.value)}
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
                                    <Form.Label>제목</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="title"
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        autoFocus
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlTextarea1"
                                >
                                    <Form.Label>설명</Form.Label>
                                    <Form.Control as="textarea" rows={3} autoFocus value={description} onChange={(e) => setDescription(e.target.value)} />
                                </Form.Group>
                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                    checked={allday}
                                    onChange={() => setAllday(!allday)}
                                    label="하루종일"
                                />
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput4" value={daysOfWeek} >
                                    <Form.Label>반복 (구현예정)</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="daysOfWeek"
                                        autoFocus
                                        value={daysOfWeek}
                                        onChange={(e) => setDaysOfWeek(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput5" value={backgroundColor} >
                                    <Form.Label>색상 (추가 예정)</Form.Label>
                                    <div key={"inline-radio"} className="mb-3" onChange={(e) => setBackgroundColor(e.target.id)}>
                                        <Form.Check
                                            inline
                                            label={<div className="rounded bg-green-dark">&nbsp;&nbsp;&nbsp;&nbsp;</div>}
                                            name="group1"
                                            type="radio"
                                            id={"rgba(62, 121, 37)"}
                                        />
                                        <Form.Check
                                            inline
                                            label={<div className="rounded bg-green-light">&nbsp;&nbsp;&nbsp;&nbsp;</div>}
                                            name="group1"
                                            type="radio"
                                            id={"rgba(180, 203, 51)"}
                                        />
                                        <Form.Check
                                            inline
                                            name="group1"
                                            label={<div className="rounded bg-yellow-light">&nbsp;&nbsp;&nbsp;&nbsp;</div>}
                                            type="radio"
                                            id={"rgba(242, 231, 151)"}
                                        />
                                        <Form.Check
                                            inline
                                            name="group1"
                                            label={<div className="rounded bg-orange">&nbsp;&nbsp;&nbsp;&nbsp;</div>}
                                            type="radio"
                                            id={"rgba(227, 125, 78)"}
                                        />
                                    </div>
                                </Form.Group>
                            </Form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                            <Button variant="primary" onClick={handleSave}>Save changes</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </>
    )
}

export default ProjecCalendarContainer;