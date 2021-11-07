import React, { useState } from "react";
import EventDeleteModal from "../event/EventDeleteModal";

import "./event.scss";

const Event = ({ height, marginTop, title, time, onDeleteEvent, id }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  const [isModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!isModal);
  };

  return (
    <div style={eventStyle} className="event" onClick={toggleModal}>
      <div className="event__title">{title}</div>
      <div className="event__time">{time}</div>
      {isModal && <EventDeleteModal onDeleteEvent={onDeleteEvent} id={id} />}
    </div>
  );
};

export default Event;
