import React, { useState } from "react";

const AnonymousHelp = () => {
  const [message, setMessage] = useState("");
  const [queue, setQueue] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) return;
    const req = { id: Date.now(), message, status: "queued" };
    setQueue([...queue, req]);
    setMessage("");
    alert("Your help request has been queued safely.");
  };

  return (
    <div className="page">
      <h2>🕊️ Anonymous Help Request</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Write your concern (no name needed)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send Anonymously</button>
      </form>

      <h3>📦 Queued Requests (Local Only)</h3>
      <ul>
        {queue.map((q) => (
          <li key={q.id}>{q.message} — {q.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default AnonymousHelp;
