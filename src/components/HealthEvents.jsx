import React, { useState } from "react";

const HealthEvents = () => {
  const [events] = useState([
    { name: "Free Health Camp", date: "2025-11-15", place: "Char Kolapara School" },
    { name: "Blood Donation Drive", date: "2025-12-01", place: "Upazila Hall" },
  ]);

  return (
    <div className="page">
      <h2>🗓️ Community Health Events</h2>
      <ul>
        {events.map((e, i) => (
          <li key={i}>
            <strong>{e.name}</strong> — {e.date} @ {e.place}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthEvents;
