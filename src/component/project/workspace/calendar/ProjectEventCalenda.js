import FullCalendar, { WeekNumberRoot } from "@fullcalendar/react" // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid" // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from "@fullcalendar/bootstrap5";
import { Tooltip } from "bootstrap";


const ProjectEventCalendar = ({events, handleDateClick, handleShow, dropEvent, resizeEvent, deleteEvent}) => {
    return (
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
            eventDrop={(info) => dropEvent(info)}
            eventResize={(info) => resizeEvent(info)}
            eventDidMount={(info) => {
                var tooltip = new Tooltip(info.el, {
                    title: info.event.extendedProps.description,
                    placement: "top",
                    trigger: "hover",
                    container: "body"
                });
            }}
            eventClick={(info) => deleteEvent(info)}
        />
    )
}

export default ProjectEventCalendar;