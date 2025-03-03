import React from "react";
import * as XLSX from "xlsx";

const ExportButton = ({ results }) => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(results);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Results");
    XLSX.writeFile(workbook, "FinanceRx_Results.xlsx");
  };

  return (
    <button onClick={exportToExcel} className="export-button">
      Export to Excel
    </button>
  );
};

export default ExportButton;