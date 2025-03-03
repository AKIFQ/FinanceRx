import React from "react";
import Papa from "papaparse";

const UploadForm = ({ setClaims, setRemittances }) => {
  const handleFileUpload = (event, type) => {
    const file = event.target.files[0];

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete: function (results) {
        if (type === "claims") {
          setClaims(results.data);
        } else {
          setRemittances(results.data);
        }
      },
    });
  };

  return (
    <div className="upload-form">
      <h2>Upload CSV Files</h2>
      <input type="file" accept=".csv" onChange={(e) => handleFileUpload(e, "claims")} />
      <input type="file" accept=".csv" onChange={(e) => handleFileUpload(e, "remittances")} />
    </div>
  );
};

export default UploadForm;