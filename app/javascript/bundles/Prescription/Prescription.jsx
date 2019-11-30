import React, { Component } from "react";
import axios from "axios";
import PrescriptionForm from "./components/PrescriptionForm";
import PrescriptionList from "./components/PrescriptionList";

export const headers = ReactOnRails.authenticityHeaders();

class Prescription extends Component {
  state = { prescriptions: [], refetch: false };

  componentDidMount() {
    this.fetchPrescriptions();
  }

  componentDidUpdate() {
    const { refetch } = this.state;
    refetch && this.fetchPrescriptions();
  }

  fetchPrescriptions = async () => {
    const { data } = await axios.get("/prescriptions.json");
    this.setState({ prescriptions: data, refetch: false });
  };

  createPrescription = async formData => {
    await axios.post("/prescriptions", formData, { headers });
    this.setState({ refetch: true });
  };

  render() {
    const { prescriptions } = this.state;
    return (
      <>
        <PrescriptionForm createPrescription={this.createPrescription} />
        <PrescriptionList prescriptions={prescriptions} />
      </>
    );
  }
}

export default Prescription;
