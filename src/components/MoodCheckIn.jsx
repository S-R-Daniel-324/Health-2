import React, { useState, useEffect } from "react";

const MoodCheckIn = () => {
  const [mood, setMood] = useState("");
  const [logs, setLogs] = useState(() => JSON.parse(localStorage.getItem("moods")) || []);

  useEffect(() => {
    localStorage.setItem("moods", JSON.stringify(logs));
  }, [logs]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!mood) return;
    const newLog = { mood, date: new Date().toLocaleString() };
    setLogs([newLog, ...logs]);
    setMood("");
  };

  return (
    <div className="page">
      <h2>🧠 Daily Mood Check-In</h2>
      <form onSubmit={handleSubmit}>
        <label>আজ কেমন লাগছে?</label>
        <select value={mood} onChange={(e) => setMood(e.target.value)}>
          <option value="">-- Select --</option>
          <option value="😊 ভালো">😊 ভালো</option>
          <option value="😐 ঠিক আছে">😐 ঠিক আছে</option>
          <option value="😔 মন খারাপ">😔 মন খারাপ</option>
          <option value="😫 চিন্তা অনেক">😫 চিন্তা অনেক</option>
        </select>
        <button type="submit">Save</button>
      </form>

      <h3>📅 Previous Logs</h3>
      <ul>
        {logs.map((l, i) => (
          <li key={i}>{l.date} — {l.mood}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoodCheckIn;
