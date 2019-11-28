import React, { Component } from 'react';
import axios from 'axios';

export const headers = ReactOnRails.authenticityHeaders()

export default class PrescriptionList extends React.Component {
    state = { DrugsList: [] }

    fetchDrugsList = () => {
        axios.get(`prescriptions.json`).then((response => {
            const data = response.data
            this.setState({ DrugsList: data }, () => console.log(this.state.DrugsList, ""))
        }))
    }

    componentDidMount() {
        this.fetchDrugsList()
    }

    render() {
        return (
            <div>
                {this.state.DrugsList && this.state.DrugsList.map(drug => {
                    return (
                        <>
                            <div>{drug.id}</div>
                            <div>{drug.generic_name}</div>
                            <div>{drug.dosage_form}</div>
                            <div>{drug.product_type}</div>
                            <div>{drug.product_ndc}</div>
                            <div>{drug.user_dosage}</div>
                            <div>{drug.user_notes}</div>
                        </>
                    )

                })
                }
            </div>
        )
    }

}