import { useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

export default () => {
    const [events, setEvents] = useState([{
        id: 0,  // 매주 반복하는 일정
        title: "All Day Event very long title",
        daysOfWeek: [ '4' ],
        startTime: '10:45:00',
        endTime: '12:45:00',
        color: 'red'
    },
    {
        id: 1, // 하루 일정 (종일)
        title: "Long Event",
        date: '2022-07-11'
    },
    {
        id: 2, // 하루 일정 (특정 시간)
        title: "Long Event",
        start: '2022-07-11T10:45:00',
        end: '2022-07-11T11:45:00',
    },
    {
        id: 3, // 긴 일정
        groupId: 'blueEvents',
        title: "DTS STARTS",
        start: '2022-07-10T10:45:00',
        end: '2022-07-13T10:45:00'
    }]);

    const handleDateClick = (arg) => { // bind with an arrow function
        console.log(arg)
    }

    return (
        <div className='mt-3'>
            <div className='calendar-container'>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    contentHeight={700}
                    selectable={true}
                    dateClick={handleDateClick} // 날짜 하나 선택
                    select={handleDateClick} //여러 날짜 드래그로 선택
                    editable={true} // 일정 드래그앤드롭으로 변경 (allday가 아닌 일정은 늘리고 줄이기 불가)
                    droppable={true}
                    dayMaxEventRows={true}  // 하루에 보여지는 일정 수 조정(나머지는 +n 으로 표시)
                    headerToolbar= {{
                        left: 'prevYear,prev',
                        center: 'title',
                        right: 'next,nextYear'
                      }}
                    eventResizableFromStart={true}
                    themeSystem={'bootstrap5'}
                />
            </div>
        </div>
    )
}