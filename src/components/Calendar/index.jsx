import React from "react";
import {Calendar, momentLocalizer} from "react-big-calendar";
import moment from "moment";

import "react-big-calendar/lib/css/react-big-calendar.css";
import {useSelector} from "react-redux";

import {Event} from "./Event";
import {ColoredDateCellWrapper} from "./ControlledDateCell";

const localizer = momentLocalizer(moment);

export const MyCalendar = React.memo(() => {
    const events = useSelector((state) => state.boardReducer.events)
    console.log('EVENTS::::')
    console.log(events)
    return (
        <div className="calendar">
            <Calendar
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="month"
                events={events}
                style={{height: "100vh"}}
                views={{
                    month: true,
                }}
                components={{
                    dateCellWrapper: ColoredDateCellWrapper,
                    event: Event
                }}
            />
        </div>
    );
})
