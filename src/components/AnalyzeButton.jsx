import React from "react";

const AnalyzeButton = ({ claims, remittances, setResults }) => {
  const processClaims = () => {
    const results = claims.map((claim) => {
      const match = remittances.find((remittance) => remittance.claimId === claim.claimId);
      return {
        claimId: claim.claimId,
        remittanceId: match ? match.remittanceId : "N/A",
        pharmacyName: claim.pharmacyName,
        insuranceName: claim.insuranceName,
        claimAmount: parseFloat(claim.claimAmount),
        paidAmount: match ? parseFloat(match.paidAmount) : 0,
        status: match
          ? parseFloat(match.paidAmount) === parseFloat(claim.claimAmount)
            ? "Paid"
            : "Underpaid"
          : "Pending",
      };
    });

    setResults(results);
  };

  return (
    <button onClick={processClaims} className="analyze-button">
      Analyze Claims
    </button>
  );
};

export default AnalyzeButton;