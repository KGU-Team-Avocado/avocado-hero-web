import { useState } from 'react';
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";

export default () => {
    const [events, setEvents] = useState([{
        id: 0,
        title: "All Day Event very long title",
        allDay: true,
        start: new Date(2022, 6, 0),
        end: new Date(2022, 6, 1)
    },
    {
        id: 1,
        title: "Long Event",
        start: new Date(2022, 6, 7),
        end: new Date(2022, 6, 10)
    },

    {
        id: 2,
        title: "DTS STARTS",
        start: new Date(2022, 6, 13, 0, 0, 0),
        end: new Date(2022, 6, 20, 0, 0, 0)
    }]);

    const handleDateClick = (arg) => { // bind with an arrow function
        console.log(arg)
    }

    return (
        <>
            {/* <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">일정</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group me-2">
                        <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar align-text-bottom" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        This week
                    </button>
                </div>

            </div> */}
            <div className='calendar-container'>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    initialView="dayGridMonth"
                    events={events}
                    contentHeight={700}
                    selectable={true}
                    dateClick={handleDateClick} // 날짜 하나 선택
                    select={handleDateClick} //여러 날짜 드래그로 선택
                    editable={true} // 일정 드래그앤드롭으로 변경
                    droppable={true}
                    eventResizableFromStart={true}
                />
            </div>
        </>
    )
}