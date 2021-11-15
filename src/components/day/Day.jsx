import React from "react";
import PropTypes from "prop-types";
import Hour from "../hour/Hour";
import { hours } from "../../utils/dateUtils.js";

import "./day.scss";

const Day = ({ dataDay, dayEvents, onDeleteEvent }) => {
  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(
          event => new Date(event.dateFrom).getHours() === hour
        );

        // console.log(hourEvents);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            onDeleteEvent={onDeleteEvent}
            dataDay={dataDay}
          />
        );
      })}
    </div>
  );
};

Day.propTypes = {
  dataDay: PropTypes.number.isRequired,
  dayEvents: PropTypes.array.isRequired,
  onDeleteEvent: PropTypes.func.isRequired,
};


export default Day;