import React from "react";

const workers = [
  { name: "Rafiq", skills: "First Aid, Maternal Health", contact: "01712-000000", verified: "BRAC" },
  { name: "Nasrin", skills: "Mental Health Support", contact: "01819-222222", verified: "Red Crescent" },
];

const VolunteerDirectory = () => (
  <div className="page">
    <h2>👩‍⚕️ Volunteer Health Worker Directory</h2>
    <ul>
      {workers.map((w, i) => (
        <li key={i}>
          <strong>{w.name}</strong> ({w.verified})<br />
          Skills: {w.skills}<br />
          📞 {w.contact}
        </li>
      ))}
    </ul>
  </div>
);

export default VolunteerDirectory;
