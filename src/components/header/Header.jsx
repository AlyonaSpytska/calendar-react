import React from "react";

import { months } from "../../utils/dateUtils.js";
import "./header.scss";

const Header = ({
  toggleNextWeek,
  togglePrevWeek,
  currentWeek,
  weekDates,
  showEventPopup,
}) => {
  let correctMonth;
  if (weekDates[0].getMonth() === weekDates[weekDates.length - 1].getMonth()) {
    correctMonth = months[weekDates[0].getMonth()];
  } else {
    correctMonth = `${months[weekDates[0].getMonth()].substring(
      0,
      3
    )} - ${months[weekDates[weekDates.length - 1].getMonth()].substring(0, 3)}`;
  }

  return (
    <header className="header">
      <div className="container">
        <button className="button create-event-btn" onClick={showEventPopup}>
          <i className="fas fa-plus create-event-btn__icon"></i>Create
        </button>
        <div className="navigation">
          <button
            className="navigation__today-btn button"
            onClick={currentWeek}
          >
            Today
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={togglePrevWeek}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button
            className="icon-button navigation__nav-icon"
            onClick={toggleNextWeek}
          >
            <i className="fas fa-chevron-right"></i>
          </button>
          <span className="navigation__displayed-month">{correctMonth}</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
