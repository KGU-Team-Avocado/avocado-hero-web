import { useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from "@fullcalendar/interaction";
import bootstrap5Plugin from '@fullcalendar/bootstrap5';
import { Tooltip } from "bootstrap";

export default () => {
    const [events, setEvents] = useState([{
        id: 0,  // 매주 반복하는 일정
        title: "All Day Event very long title",
        description: 'description for All Day Event1',
        daysOfWeek: [ '4' ],
        startTime: '10:45:00',
        endTime: '12:45:00',
        color: 'red'
    },
    {
        id: 1, // 하루 일정 (종일)
        title: "Long Event",
        description: 'description for All Day Event2',
        date: '2022-07-11',
        backgroundColor: 'rgba(62, 121, 37)'
    },
    {
        id: 2, // 하루 일정 (특정 시간)
        title: "Long Event",
        description: 'description for All Day Event3',
        start: '2022-07-11T10:45:00',
        end: '2022-07-11T11:45:00',
        borderColor: 'red'
    },
    {
        id: 3, // 긴 일정
        groupId: 'blueEvents',
        title: "DTS STARTS",
        description: 'description for All Day Event4',
        start: '2022-07-10T10:45:00',
        end: '2022-07-13T10:45:00',
    }]);

    const handleDateClick = (arg) => { // bind with an arrow function
        console.log(arg)
    }

    return (
        <div className='mt-3'>
            <div className='calendar-container'>
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
                            text: '새일정',
                            click: function () {
                                alert('새일정 만들기!');
                            }
                        }
                    }}
                    headerToolbar= {{
                        left: 'prevYear,prev today createNewEvent',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,listWeek next,nextYear'
                    }}
                    eventResizableFromStart={true}
                    themeSystem={'bootstrap5'}
                    eventDrop={(info) => {  // 일정 드래그앤드롭으로 변경할 때 발생하는 이벤트
                        alert(info.event.title + " was dropped on " + info.event.start.toISOString());

                        if (!window.confirm("Are you sure about this change?")) {
                            info.revert();
                        }
                    }}
                    eventResize={(info) => { // 일정 기간 조정 시 발생하는 이벤트
                        alert(info.event.title + " end is now " + info.event.end.toISOString());

                        if (!window.confirm("is this okay?")) {
                            info.revert();
                        }
                    }}
                    eventDidMount={(info) => {
                        var tooltip = new Tooltip(info.el, {
                            title: info.event.extendedProps.description,
                            placement: 'top',
                            trigger: 'hover',
                            container: 'body'
                        });
                    }}
                />
            </div>
        </div>
    )
}