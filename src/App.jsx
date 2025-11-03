import React, { useState } from "react";
import MoodCheckIn from "./components/MoodCheckIn";
import CommunityMap from "./components/CommunityMap";
import AnonymousHelp from "./components/AnonymousHelp";
import SeasonalTips from "./components/SeasonalTips";
import MaternalChildTracker from "./components/MaternalChildTracker";
import SymptomGuide from "./components/SymptomGuide";
import HealthEvents from "./components/HealthEvents";
import DataExport from "./components/DataExport";
import VoiceAssistant from "./components/VoiceAssistant";
import VolunteerDirectory from "./components/VolunteerDirectory";


function App() {
  const [page, setPage] = useState("home");

  const renderPage = () => {
    switch (page) {
      case "mood": return <MoodCheckIn />;
      case "map": return <CommunityMap />;
      case "help": return <AnonymousHelp />;
      case "tips": return <SeasonalTips />;
      case "maternal": return <MaternalChildTracker />;
      case "symptom": return <SymptomGuide />;
      case "events": return <HealthEvents />;
      case "volunteer": return <VolunteerDirectory />;
      case "export": return <DataExport />;
      case "voice": return <VoiceAssistant />;
      default:
        return (
          <div className="home">
            <h1>BhaloAchoTo Appcd</h1>
            <p>Community Health Navigator for Rural Bangladesh</p>
            <ul>
              <li onClick={() => setPage("mood")}>1️⃣ Mental Health Check-In</li>
              <li onClick={() => setPage("map")}>2️⃣ Community Health Map</li>
              <li onClick={() => setPage("help")}>3️⃣ Anonymous Help Request</li>
              <li onClick={() => setPage("tips")}>4️⃣ Seasonal Health Tips</li>
              <li onClick={() => setPage("maternal")}>5️⃣ Maternal & Child Tracker</li>
              <li onClick={() => setPage("symptom")}>6️⃣ Symptom Awareness Guide</li>
              <li onClick={() => setPage("events")}>7️⃣ Community Health Events</li>
              <li onClick={() => setPage("volunteer")}>8️⃣ Volunteer Directory</li>
              <li onClick={() => setPage("export")}>9️⃣ NGO Data Export</li>
              <li onClick={() => setPage("voice")}>🔊 Voice Assistant</li>
            </ul>
          </div>
        );
    }
  };

  return (
    <div className="app">
      {renderPage()}
      <footer>
        <button onClick={() => setPage("home")}>🏠 Home</button>
      </footer>
    </div>
  );
}

export default App;
