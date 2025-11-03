import React from "react";

const tips = {
  summer: ["Drink clean water", "Avoid dehydration", "Use ORS if needed"],
  monsoon: ["Avoid standing water", "Use mosquito nets", "Clean flower pots"],
  winter: ["Keep warm", "Avoid cold drinks", "Protect children from pneumonia"]
};

const currentMonth = new Date().getMonth();
let season = "summer";
if (currentMonth >= 5 && currentMonth <= 8) season = "monsoon";
else if (currentMonth >= 11 || currentMonth <= 1) season = "winter";

const SeasonalTips = () => (
  <div className="page">
    <h2>🌿 Seasonal Health Tips ({season})</h2>
    <ul>
      {tips[season].map((t, i) => <li key={i}>{t}</li>)}
    </ul>
  </div>
);

export default SeasonalTips;
