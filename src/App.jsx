import React, { useState, useEffect } from "react";
import Header from "./components/header/Header.jsx";
import Modal from "./components/modal/Modal.jsx";
import Calendar from "./components/calendar/Calendar.jsx";
import "./common.scss";
import {
  createEvent,
  fetchEventsList,
  deleteEvent,
} from "./gateway/events.js";
import {
  getWeekStartDate,
  generateWeekRange,
} from "./utils/dateUtils.js";

const DAYS = 7;

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());
  const [eventPopup, setEventPopup] = useState(false);
  const [events, setEvents] = useState([]);

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const toggleNextWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(new Date(weekStartDate).getDate() + DAYS))
    );
  };

  const togglePrevWeek = () => {
    setWeekStartDate(
      new Date(weekStartDate.setDate(new Date(weekStartDate).getDate() - DAYS))
    );
  };

  const currentWeek = () => {
    setWeekStartDate(new Date());
  };

  const showEventPopup = () => {
    setEventPopup(true);
  };

  const hideEventPopup = () => {
    setEventPopup(false);
  };

  const getEventsList = () => {
    fetchEventsList()
      .then(eventsList => {
        setEvents(eventsList);
      })
      .catch(error => alert(error));
  };
  const handleSubmit = (e, eventData) => {
    e.preventDefault();

    const { title, date, startTime, endTime, description } = eventData;

    const newEvent = {
      title,
      description,
      dateFrom: new Date(`${date} ${startTime}`),
      dateTo: new Date(`${date} ${endTime}`),
    };
    createEvent(newEvent).then(() => getEventsList());

    setEventPopup(false);
  };

  useEffect(() => {
    getEventsList();
  }, []);

  const onDeleteEvent = id => deleteEvent(id).then(() => getEventsList());


  return (
    <>
      <Header
        toggleNextWeek={toggleNextWeek}
        togglePrevWeek={togglePrevWeek}
        currentWeek={currentWeek}
        weekDates={weekDates}
        showEventPopup={showEventPopup}
      />
      <Calendar
        weekDates={weekDates}
        events={events}
        onDeleteEvent={onDeleteEvent}
      />
      {eventPopup && (
        <Modal handleSubmit={handleSubmit} hideEventPopup={hideEventPopup} />
      )}
    </>
  );
};

export default App;
