import React from "react";

const PrescriptionList = ({ prescriptions = [] }) => (
  <div>
    <h1>Prescription List</h1>
    {prescriptions.map(drug => (
      <>
        <div>{drug.id}</div>
        <div>{drug.name}</div>
      </>
    ))}
  </div>
);

export default PrescriptionList;
