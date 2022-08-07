import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ProjectEventCalendar from "../../../component/project/calendar/ProjectEventCalenda";
import CalendarModal from "../../../component/project/calendar/CalendarModal";

const DayOfTheWeek = [
    {
        name: '일',
        value: '0'
    },
    {
        name: '월',
        value: '1'
    },
    {
        name: '화',
        value: '2'
    },
    {
        name: '수',
        value: '3'
    },
    {
        name: '목',
        value: '4'
    },
    {
        name: '금',
        value: '5'
    },
    {
        name: '토',
        value: '6'
    },
]

const ProjecCalendarContainer = () => {
    const [show, setShow] = useState(false);
    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    const inputTitle = useRef();
    const inputDesc = useRef();
    const [allday, setAllday] = useState(false);
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [color, setColor] = useState("");
    const [events, setEvents] = useState([{
        id: '0',  // 매주 반복하는 일정
        title: "All Day Event very long title",
        description: "description for All Day Event1",
        startRecur: "2022-07-14",
        endRecur: "2022-08-12",
        startTime: "10:45",
        endTime: "22:45",
        daysOfWeek: ["0","6"],
        color: "red"
    },
    {
        id: '1', // 하루 일정 (종일)
        title: "Long Event",
        description: "description for All Day Event2",
        date: "2022-07-11",
        start: "2022-07-11",
        end: "2022-07-11",
        color: "rgba(62, 121, 37)"
    },
    {
        id: '2', // 하루 일정 (특정 시간)
        title: "Long Event",
        description: "description for All Day Event3",
        start: "2022-07-11 10:45:00",
        end: "2022-07-11 11:45:00",
        color: "red"
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
        setStartDay(arg.start);
        setEndDay(arg.end);
        setAllday(arg.allDay);
    }

    const handleStartDay = (val) => {
        setStartDay(val);
    }

    const handleEndDay = (val) => {
        setEndDay(val);
    }

    const handleAllDay = (val) => {
        setAllday(val);
    }

    const handleColor = (val) => {
        setColor(val);
    }

    const handleSave = () => {
        const id = parseInt(events[events.length - 1].id) + 1;
        const newStartDate = new Date(startDay);
        const newEndDate = new Date(endDay);

        let newEvent = {
            id: id,
            title: inputTitle.current.value,
            description: inputDesc.current.value,
            color: color,
            allDay: allday
        };

        if (daysOfWeek.length === 0){
            newEvent = { 
                ...newEvent,
                start: startDay,
                end: endDay
            };
        } else {
            newEvent = {
                ...newEvent,
                startRecur: newStartDate.toLocaleDateString(),
                endRecur: newEndDate.toLocaleDateString(),
                startTime: newStartDate.getHours() + ':' + newStartDate.getMinutes(),
                endTime: newEndDate.getHours() + ':' + newEndDate.getMinutes(),
                daysOfWeek: daysOfWeek,
            };
        }

        setEvents([...events, newEvent]);
        setStartDay("");
        setEndDay("");
        setAllday("");
        setColor("");
        setDaysOfWeek([]);
        setShow(false);
    }

    const handleClose = () => {
        setStartDay("");
        setEndDay("");
        setAllday("");
        setColor("");
        setDaysOfWeek([]);
        setShow(false);
    }

    const handleShow = () => { setShow(true); };

    const changeHandler = (checked, id) => {
        if (checked) {
            setDaysOfWeek([...daysOfWeek, id]);
        } else {
            // 체크 해제
            setDaysOfWeek(daysOfWeek.filter(val => val !== id));
        }
    };

    const dropEvent = (info) => {  // 일정 드래그앤드롭으로 변경할 때 발생하는 이벤트
        alert(info.event.id + " was dropped on " + info.event.start.toISOString());

        if (!window.confirm("Are you sure about this change?")) {
            info.revert();
        } else {
            setEvents(events.map((event) => event.id === info.event.id ? { ...event, start: info.event.start, end: info.event.end } : event))
        }
    };

    const resizeEvent = (info) => { // 일정 기간 조정 시 발생하는 이벤트
        alert(info.event.title + " end is now " + info.event.end.toISOString());
        console.log(info.event.id)

        if (!window.confirm("is this okay?")) {
            info.revert();
        } else {
            setEvents(events.map((event) => event.id === info.event.id ? { ...event, start: info.event.start, end: info.event.end } : event))
        }
    };

    const deleteEvent = (info) => {
        {
            if (!window.confirm("삭제하시겠습니까?")) {
                info.revert();
            } else {
                setEvents(events.filter((event) => event.id !== info.event.id))
            }
        }
    }

    return (
        <>
            <div className="mt-3">
                <div className="calendar-container">

                    <ProjectEventCalendar 
                        events={events}
                        handleDateClick={handleDateClick}
                        handleShow={handleShow}
                        dropEvent={dropEvent}
                        resizeEvent={resizeEvent}
                        deleteEvent={deleteEvent}
                    />

                    <CalendarModal 
                        show={show}
                        allday={allday}
                        startDay={startDay}
                        endDay={endDay}
                        daysOfWeek={daysOfWeek}
                        color={color}
                        inputTitle={inputTitle}
                        inputDesc={inputDesc}
                        DayOfTheWeek={DayOfTheWeek}
                        handleStartDay={handleStartDay}
                        handleEndDay={handleEndDay}
                        handleAllDay={handleAllDay}
                        handleColor={handleColor}
                        handleSave={handleSave}
                        handleClose={handleClose}
                        changeHandler={changeHandler}
                    />
                </div>
            </div>
        </>
    )
}

export default ProjecCalendarContainer;