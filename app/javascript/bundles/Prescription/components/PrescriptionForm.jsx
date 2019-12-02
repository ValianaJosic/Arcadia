import React, { Component } from "react";
import axios from "axios";

export default class PrescriptionForm extends Component {
  state = {
    ndcQuery: "",
    userNotes: "",
    drug: {
      brandName: "",
      dosageForm: "",
      genericName: "",
      productID: "",
      productNDC: "",
      productType: ""
    }
  };

  handleInputChange = field => e => {
    const value = e.target.value.trim();
    this.setState({ [field]: value });
  };

  fetchDrugs = () => {
    const { ndcQuery } = this.state;
    axios
      .get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:"${ndcQuery}"`)
      .then(({ data }) => {
        const result = data.results[0] || {};
        const {
          brand_name: brandName,
          generic_name: genericName,
          dosage_form: dosageForm,
          product_type: productType,
          product_id: productID,
          product_ndc: productNDC
        } = result;
        this.setState({
          drug: {
            brandName,
            dosageForm,
            genericName,
            productID,
            productNDC,
            productType
          }
        });
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { drug, userNotes } = this.state;
    const { createPrescription } = this.props;
    createPrescription({ ...drug, userNotes });
  };

  render() {
    const { drug } = this.state;
    return (
      <div>
        <div className="prescrip-search">
          <input
            type="search"
            id="ndcCode"
            className="prescription-input"
            onChange={this.handleInputChange("ndcQuery")}
            placeholder="Search by NDC Code, ex. 55566-7501"
          />
          <span>
            <button
              className="button is-info prescrip-button"
              onClick={this.fetchDrugs}
            >
              Search
            </button>
          </span>
        </div>

        <div class="prescription-info">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="brand">Brand Name</label>
              <input
                id="brand"
                type="text"
                className="med-facts"
                value={drug.brandName}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="brand">Generic Name</label>
              <input
                id="generic-name"
                type="text"
                className="med-facts"
                value={drug.genericName}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="brand">Dosage Form</label>
              <input
                id="dosage-form"
                type="text"
                className="med-facts"
                value={drug.dosageForm}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="brand">Product Type</label>
              <input
                id="product-type"
                type="text"
                className="med-facts"
                value={drug.productType}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="brand">Product Id</label>
              <input
                id="product-id"
                type="text"
                className="med-facts"
                value={drug.productID}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="brand">Product NDC</label>
              <input
                id="product-ndc"
                type="text"
                className="med-facts"
                value={drug.productNDC}
                readOnly
              />
            </div>
            <div>
              <label htmlFor="notes">Notes</label>
              <input
                id="notes"
                className="med-facts"
                onChange={this.handleInputChange("userNotes")}
                type="text"
              />
            </div>
            <div class="pres-btn">
            <button type="submit" class="prescrip-add-button">
              Add
            </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
