import { useEffect, useRef, useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import ProjectEventCalendar from "../../../component/workspace/calendar/ProjectEventCalenda";
import CalendarModal from "../../../component/workspace/calendar/CalendarModal";
import axios from "axios";
import { useParams } from "react-router-dom";
import * as API from "../../../api/API";
import { useDispatch, useSelector } from "react-redux";
import { selectGroup } from "api/redux/group/groupSlice";
import { getGroupAsync } from "api/redux/group/groupSlice";

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

const CalendarContainer = () => {
    const group = useSelector(selectGroup);
    const dispatch = useDispatch();

    const [show, setShow] = useState(false);
    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");
    const inputTitle = useRef();
    const inputDesc = useRef();
    const [allday, setAllday] = useState(false);
    const [daysOfWeek, setDaysOfWeek] = useState([]);
    const [color, setColor] = useState("");
    const [events, setEvents] = useState([]);

    const params = useParams();
    const project_id = params.id;

    useEffect(() => {
        const recursive = group.events.recursive.map((rec) => { return { ...rec, id: rec._id } })
        const nonrecursive = group.events.nonrecursive.map((non) => { return { ...non, id: non._id } })

        setEvents([...recursive, ...nonrecursive]);
    }, []);

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
        const newStartDate = new Date(startDay);
        const newEndDate = new Date(endDay);
        let mode = '';

        let newEvent = {
            title: inputTitle.current.value,
            description: inputDesc.current.value,
            color: color,
            allDay: allday
        };

        if (daysOfWeek.length === 0){
            mode = 'nonrecursive';
            newEvent = { 
                ...newEvent,
                start: startDay,
                end: endDay
            };
        } else {
            mode = 'recursive';
            newEvent = {
                ...newEvent,
                startRecur: newStartDate.toLocaleDateString(),
                endRecur: newEndDate.toLocaleDateString(),
                startTime: newStartDate.getHours() + ':' + newStartDate.getMinutes(),
                endTime: newEndDate.getHours() + ':' + newEndDate.getMinutes(),
                daysOfWeek: daysOfWeek,
            };
        }

        console.log(newEvent)

        axios.post("/groupsRouter/saveNewEvent", {
            _id: project_id,
            event: newEvent,
            mode: mode
        }).then((response) => {
            console.log(response.data);
            const recursive = response.data.recursive.map(rec => { return {...rec, id: rec._id} })
            const nonrecursive = response.data.nonrecursive.map(non => { return {...non, id: non._id} })
            setEvents([...recursive, ...nonrecursive]);
            setStartDay("");
            setEndDay("");
            setAllday("");
            setColor("");
            setDaysOfWeek([]);
            setShow(false);
            dispatch(getGroupAsync(project_id));
        }).catch(function (error) {
            console.log(error);
        });
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
            modifyEvent(info);
        }
    };

    const resizeEvent = (info) => { // 일정 기간 조정 시 발생하는 이벤트
        alert(info.event.title + " end is now " + info.event.end.toISOString());
        console.log(info.event)

        if (!window.confirm("is this okay?")) {
            info.revert();
        } else {
            modifyEvent(info);
        }
    };

    const modifyEvent = (info) => {
        const event = events.filter((event) => event._id === info.event.id)
        if(event[0].daysOfWeek){
            alert('반복일정은 수정이 불가합니다.');
            info.revert();
            return;
        }

        axios.post("/groupsRouter/modifyEvent", {
            _id: project_id,
            event_id: info.event.id,
            start: info.event.start,
            end: info.event.end,
        }).then((response) => {
            console.log(response.data);
            const recursive = response.data.recursive.map(rec => { return {...rec, id: rec._id} })
            const nonrecursive = response.data.nonrecursive.map(non => { return {...non, id: non._id} })
            setEvents([...recursive, ...nonrecursive]);
        }).catch(function (error) {
            console.log(error);
        });
    }

    const deleteEvent = (info) => {
        const event = events.filter((event) => event._id === info.event.id)
        let mode = 'nonrecursive';
        if(event[0].daysOfWeek){
            mode = 'recursive'
        }

        if (!window.confirm("삭제하시겠습니까?")) {
            info.revert();
        } else {
            axios.post("/groupsRouter/deleteEvent", {
                _id: project_id,
                event_id: info.event.id,
                mode: mode
            }).then((response) => {
                console.log(response.data);
                const recursive = response.data.recursive.map(rec => { return {...rec, id: rec._id} })
                const nonrecursive = response.data.nonrecursive.map(non => { return {...non, id: non._id} })
                setEvents([...recursive, ...nonrecursive]);
            }).catch(function (error) {
                console.log(error);
            });
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

export default CalendarContainer;