import React, { Component } from 'react';
import axios from 'axios';
 
export default class NDCSearch extends React.Component {
  state = { drug: {brandName: '', dosageForm: '',genericName: '',productID: '',productNDC: '',productType: '' } }

  getDrug = event => {
    const ndcSearch = event.target.value.trim()
    axios.get(`https://api.fda.gov/drug/ndc.json?search=product_ndc:"${ndcSearch}"`)
    .then(({ data }) => {
      const result = data.results[0] || {};
      const { brand_name: brandName,
              generic_name: genericName, 
              dosage_form: dosageForm, 
              product_type: productType,
              product_id: productID,
              product_ndc: productNDC
            } = result;
      this.setState({ drug: { brandName, dosageForm, genericName, productID, productNDC, productType }})
    })
  }

  render() {
    let myObj = this.state.drug
    return(
      // THIS IS THE TABLE USED FOR TESTING THE API CALL
      <div>
        <div className='dev-table-title'>
          <h1>National Drug Code Information</h1>
          <input
            type='search' 
            name='ndcCode'
            onChange= { this.getDrug }
            placeholder='Search by NDC Code'
          />
        </div>
        <table className='dev-table'>
          <thead>
            <tr>
              <th>Brand Name</th>
              <th>Generic Name</th>
              <th>Dosage Form</th>
              <th>Product Type</th>
              <th>Product ID</th>
              <th>Product NDC</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{myObj.brandName}</td>
              <td>{myObj.genericName}</td>
              <td>{myObj.dosageForm}</td>
              <td>{myObj.productType}</td>
              <td>{myObj.productID}</td>
              <td>{myObj.productNDC}</td>
            </tr>
          </tbody>
        </table>
        
        {/* THIS IS THE FORM WE NEED POPULATED WITH THE API AND SUBMISSION TO THE DATABASE */}
        {/* WITH THE CORRECT FIELDS MAPPED TO THE prescriptions TABLE IN THE DB/SCHEMA */}
        <form action="/prescriptions/add" method="POST">
          <input type="hidden" name="authenticity_token" readOnly value={ReactOnRails.authenticityToken()}/>
          <div>
            <label htmlFor="brand">Brand</label>
            <input id="brand" type="text" value={myObj.brandName} readOnly/>
          </div>
          <div>
            <label htmlFor="notes">Notes</label>
            <input id="notes" type="text" />
          </div>
          <button type="submit">Submit</button>

        </form>
      </div>
    )
  }

}