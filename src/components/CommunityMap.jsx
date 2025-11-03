import React, { useState, useEffect } from "react";

const sampleClinics = [
  { name: "Char Kolapara Clinic", type: "Community Clinic", upazila: "Bhola", union: "Char Kolapara" },
  { name: "Upazila Health Complex", type: "Hospital", upazila: "Bhola", union: "Sadar" },
];

const CommunityMap = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude }),
        () => setLocation(null)
      );
    }
  }, []);

  return (
    <div className="page">
      <h2>📍 Community Health Map</h2>
      {location ? (
        <p>Your location: {location.lat.toFixed(2)}, {location.lon.toFixed(2)}</p>
      ) : (
        <p>Unable to fetch GPS location. Showing fallback list.</p>
      )}
      <h3>Nearby Clinics</h3>
      <ul>
        {sampleClinics.map((c, i) => (
          <li key={i}>
            <strong>{c.name}</strong> — {c.type} ({c.union}, {c.upazila})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunityMap;
