import React from "react";

const PrescriptionList = ({ prescriptions = [] }) => (
  <div>
    <h1>Prescription List</h1>
    {prescriptions.map(drug => (
      <>
        <div>{drug.name}</div>
        <div>{drug.dosage_form}</div>
        <div>{drug.product_type}</div>
        <div>{drug.product_ndc}</div>
        <div>{drug.user_notes}</div>
      </>
    ))}
  </div>
);

export default PrescriptionList;
