import React from "react";

const symptoms = [
  { title: "Diarrhea", info: "If lasts 3+ days or blood present → See doctor, give ORS." },
  { title: "Chest Pain", info: "Seek medical help immediately. Could be heart-related." },
  { title: "Fever", info: "If high for 3+ days → Visit clinic. Avoid self-medication." },
  { title: "Sadness", info: "Feeling low 2+ weeks? Talk to someone. It's not weakness." },
];

const SymptomGuide = () => (
  <div className="page">
    <h2>💊 Symptom Awareness Guide</h2>
    <ul>
      {symptoms.map((s, i) => (
        <li key={i}><strong>{s.title}:</strong> {s.info}</li>
      ))}
    </ul>
  </div>
);

export default SymptomGuide;
