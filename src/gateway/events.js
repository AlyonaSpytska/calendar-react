const baseUrl = "https://61c1af819dbcca0017c82061.mockapi.io/event";

export const createEvent = eventData =>
  fetch(baseUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });

export const fetchEventsList = () =>
  fetch(baseUrl).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
    return response.json();
  });

export const deleteEvent = id =>
  fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });
