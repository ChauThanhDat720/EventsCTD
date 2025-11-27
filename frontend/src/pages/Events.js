import React from "react";
import { useLoaderData } from "react-router-dom";

// Giả sử loadEvents fetch dữ liệu từ server
async function loadEvents() {
  const response = await fetch("http://localhost:5000/events");
  if (!response.ok) {
    throw new Error("Could not fetch events");
  }
  return response.json();
}

// đổi tên function loader tránh trùng hook
export async function eventsLoader() {
  const events = await loadEvents();
  return { events };
}

function Events() {
  const { events } = useLoaderData();

  return (
    <div>
      <h1>All Events</h1>
      <ul>
        {events.map((event) => (
          <li key={event.id}>{event.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
