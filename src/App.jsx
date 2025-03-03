import React, { useState } from "react";
import UploadForm from "./components/UploadForm";
import AnalyzeButton from "./components/AnalyzeButton";
import ResultsTable from "./components/ResultsTable";
import ExportButton from "./components/ExportButton";
import "./index.css";

const App = () => {
  const [claims, setClaims] = useState([]);
  const [remittances, setRemittances] = useState([]);
  const [results, setResults] = useState([]);

  return (
    <div className="app">
      <h1>FinanceRx - Pharmacy Claim Tracker</h1>
      <div className="upload-section">
        <UploadForm setClaims={setClaims} setRemittances={setRemittances} />
      </div>
      <AnalyzeButton claims={claims} remittances={remittances} setResults={setResults} />
      {results.length > 0 && (
        <>
          <ResultsTable results={results} />
          <div className="export-section">
            <ExportButton results={results} />
          </div>
        </>
      )}
    </div>
  );
};

export default App;