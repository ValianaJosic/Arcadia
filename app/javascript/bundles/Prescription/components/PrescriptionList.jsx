import React from "react";

const PrescriptionList = ({ prescriptions = [] }) => (
  <div>
    <h1 className="prescription-list-title">Prescription List</h1>
    {prescriptions.map(drug => (
      <>
        <div class="drug-div">
        <div class="drug-info-name">{drug.name}</div>
        <div class="drug-info">{drug.dosage_form}</div>
        <div class="drug-info">{drug.product_type}</div>
        <div class="drug-info">{drug.product_ndc}</div>
        <div class="drug-info">{drug.user_notes}</div>
        </div>
      </>
    ))}
  </div>
);

export default PrescriptionList;
