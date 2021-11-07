import React from "react";
import "./event.scss";

const EventDeleteModal = ({ onDeleteEvent, id }) => (
  <button className="delete-event-btn" onClick={() => onDeleteEvent(id)}>
    Delete
    <i className="far fa-trash-alt delete-event-btn__icon"></i>
  </button>
);

export default EventDeleteModal;
