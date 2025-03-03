import React from "react";

const ResultsTable = ({ results }) => {
  return (
    <table className="results-table">
      <thead>
        <tr>
          <th>Claim ID</th>
          <th>Remittance ID</th>
          <th>Pharmacy</th>
          <th>Insurance</th>
          <th>Claim Amount</th>
          <th>Paid Amount</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result, index) => (
          <tr key={index} className={result.status === "Underpaid" ? "underpaid-row" : ""}>
            <td>{result.claimId}</td>
            <td>{result.remittanceId}</td>
            <td>{result.pharmacyName}</td>
            <td>{result.insuranceName}</td>
            <td>{result.claimAmount}</td>
            <td>{result.paidAmount}</td>
            <td className={result.status === "Underpaid" ? "underpaid" : "paid"}>
              {result.status}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResultsTable;