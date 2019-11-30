import React from "react";

const PrescriptionList = ({ prescriptions = [] }) => (
  <div>
    <h1 className="prescription-list-title">Prescription List</h1>
    {prescriptions.map(drug => (
      <>
        <div className="prescription-added">{drug.id}</div>
        <div className="prescription-added">{drug.name}</div>
      </>
    ))}
  </div>
);

export default PrescriptionList;
