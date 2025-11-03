import React from "react";

const DataExport = () => {
  const handleExport = () => {
    const data = {
      totalCheckIns: 14,
      helpRequests: 3,
      popularTopics: ["Dengue", "Mental Health"],
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "ngo_export.json";
    link.click();
  };

  return (
    <div className="page">
      <h2>📊 Data Export for NGOs</h2>
      <p>Exports anonymized, aggregated health data.</p>
      <button onClick={handleExport}>Download JSON</button>
    </div>
  );
};

export default DataExport;
