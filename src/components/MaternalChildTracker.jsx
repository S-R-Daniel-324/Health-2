import React, { useState, useEffect } from "react";

const MaternalChildTracker = () => {
  const [date, setDate] = useState("");
  const [schedule, setSchedule] = useState([]);

  const vaccines = [
    { name: "BCG", weeks: 0 },
    { name: "Penta-1", weeks: 6 },
    { name: "Penta-2", weeks: 10 },
    { name: "Penta-3", weeks: 14 },
    { name: "MR", weeks: 36 },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) return;
    const birth = new Date(date);
    const upcoming = vaccines.map(v => ({
      name: v.name,
      due: new Date(birth.getTime() + v.weeks * 7 * 24 * 60 * 60 * 1000).toLocaleDateString()
    }));
    setSchedule(upcoming);
  };

  return (
    <div className="page">
      <h2>👶 Maternal & Child Health Tracker</h2>
      <form onSubmit={handleSubmit}>
        <label>Child Birth Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <button type="submit">Show Schedule</button>
      </form>
      <ul>
        {schedule.map((s, i) => (
          <li key={i}>{s.name}: {s.due}</li>
        ))}
      </ul>
    </div>
  );
};

export default MaternalChildTracker;
