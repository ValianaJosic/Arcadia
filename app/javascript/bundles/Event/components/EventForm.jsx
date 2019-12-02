import React, { Component } from "react";
import axios from "axios";

export const headers = ReactOnRails.authenticityHeaders();

const eventTypeOptions = [
  { label: "Select Type", value: "" },
  { label: "Prescription", value: "prescriptions" },
  { label: "Contact", value: "contacts" }
];

export default class EventForm extends React.Component {
  state = {
    eventTypeData: [],
    eventValues: { type: "", name: "", date: "", time: "", notes: "" }
  };

  fetchData = async e => {
    const { eventValues } = this.state;
    const type = e.target.value;
    const normalizedType =
      type[0].toUpperCase() + type.substr(1, type.length - 2);
    const { data } = await axios.get(`/${type}.json`);
    this.setState({
      eventTypeData: data,
      eventValues: { ...eventValues, name: data[0].id, type: normalizedType }
    });
  };

  handleInputChange = field => e => {
    const value = e.target.value.trim();
    this.setState(prevState => ({
      eventValues: { ...prevState.eventValues, [field]: value }
    }));
  };

  handleSubmit = async e => {
    e.preventDefault();
    const { eventValues } = this.state;
    await axios.post("/events", eventValues, { headers });
    Turbolinks.visit("/agendas");
  };

  render() {
    const { eventTypeData } = this.state;
    return (
      <div class="event-form-div">
        <form class="event-form" onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="type" class="event-name">
              Type
            </label>
            <select class="event-select" onChange={this.fetchData}>
              {eventTypeOptions.map(({ label, value }) => (
                <option key={value} value={value}>
                  {label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="name" class="event-name">
              Name
            </label>
            <select
              class="event-select"
              onChange={this.handleInputChange("name")}
            >
              {eventTypeData.map(data => (
                <option key={data.id} value={data.id}>
                  {data.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="date" class="event-name">
              Date
            </label>
            <input
              class="event-select"
              id="date"
              onChange={this.handleInputChange("date")}
              type="date"
            />
          </div>
          <div>
            <label htmlFor="time" class="event-name">
              Time
            </label>
            <input
              class="event-select"
              id="time"
              onChange={this.handleInputChange("time")}
              type="time"
            />
          </div>
          <div>
            <label htmlFor="notes" class="event-name">
              Notes
            </label>
            <input
              class="event-note"
              id="notes"
              onChange={this.handleInputChange("notes")}
              type="text"
            />
          </div>
          <div class="event-btn-div">
            <button type="submit" class="event-btn">
              Add
            </button>
          </div>
        </form>
      </div>
    );
  }
}
