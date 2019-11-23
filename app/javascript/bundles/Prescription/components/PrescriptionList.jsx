import { React, Component } from 'react';
import axios from 'axios';

export const headers = ReactOnRails.authenticityHeaders()

export default class PrescriptionList extends React.Component {

    state = { DrugsList: []} 

    fetchDrugsList = () => {

        DrugsList = this.state;
        axios.get(`prescriptions.json`).then((response => {
            const data = response.data
            this.setState({DrugsList: data})
            }
          ))

    }
    
    //WILL ADD DELETE FUNCTIONALITY LATER
    // handleSubmit = async e => {
    //     const { drug, userNotes } = this.state;
    //     const { data } = await axios.post("/prescriptions/delete", { ...drug, userNotes }, { headers })
    // };

    render() {
        let myObj = this.state.drug
        return (

            // <table>
            // <tbody>
            //     <% @prescriptions.each do |prescription| %>
            //     <td><%= prescription.brand_name %><td>
            //     <td><%= prescription.generic_name %><td>
            //     <td><%= prescription.dosage_form %><td>
            //     <td><%= prescription.product_type %><td>
            //     <td><%= prescription.product_ndc %><td>
            //     <td><%= prescription.user_dosage %><td>
            //     <td><%= prescription.user_notes %><td>
            //     <% end %>
            // </tbody>
            // <table>

            <div>
                <span>Prescriptions List</span>
                <div>
                    <span>
                        <button className="Precription-List-Refresh" onClick={this.fetchDrugsList}>Refresh</button>
                    </span>
                </div>

                array.forEach(element => {

                });
                <div>
                    <div>
                        <b>Brand Name</b>
                        <div> value={myObj.brandName}</div>
                    </div>
                    <div>
                        <b>Generic Name</b>
                        <input id="generic-name" type="text" value={myObj.genericName} readOnly />
                    </div>
                    <div>
                        <b>Dosage Form</b>
                        <input id="dosage-form" type="text" value={myObj.dosageForm} readOnly />
                    </div>
                    <div>
                        <b>Product Type</b>
                        <input id="product-type" type="text" value={myObj.productType} readOnly />
                    </div>
                    <div>
                        <b>Product Id</b>
                        <input id="product-id" type="text" value={myObj.productID} readOnly />
                    </div>
                    <div>
                        <b>Product NDC</b>
                        <input id="product-ndc" type="text" value={myObj.productNDC} readOnly />
                    </div>
                    <div>
                        <b>Notes</b>
                        <input id="notes" onChange={this.handleInputChange('userNotes')} type="text" />
                    </div>
                    <button type="submit">Submit</button>
                </div>
            </div>
        )
    }
}