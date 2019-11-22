import React, { Component } from 'react'
import axios from 'axios'

export const headers = ReactOnRails.authenticityHeaders()

export default class EventForm extends React.Component {
  state = { 
    eventTypeOptions: {
      Prescription: 'prescriptions',
      Contact: 'contacts'
    }
            // eventTypeValue: ''
          }

  handleChange = (e) => {
    // this.setState({eventTypeValue: e.target.value});
    this.fetchNames('contacts')
      // e.target.value)
  }

  fetchNames = (eventTypeValue) => {
    axios.get(`/${eventTypeValue}.json`)
      .then(response => console.log(response.data))
  }

  objectList = () => {
    const {eventTypeOptions} =  this.state
    for (const property in eventTypeOptions ) {
    return <option key={property} value={eventTypeOptions[property]}>{property}</option>
    }
  }
  

  render() {
    // let myVar = this.state.eventTypeOptions.map((type, index) => <option key={index} value={type}>{type}</option>)
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Event Type:
          <select value={this.state.eventTypeValue} onChange={this.handleChange}>
            {this.objectList()}
          </select>
        </label>
      </form>
      )
    }

    // componentDidMount(){
    //   this.objectList()
    // }
}