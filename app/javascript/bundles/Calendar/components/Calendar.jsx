import React, { Component } from "react"
import axios from "axios"
import Calendar from 'material-ui/DatePicker/Calendar';

export default class Calendar extends React.Component {

    render() {
        return (

            <Calendar
                autoOk={false}
                cancelLabel={false}
                firstDayOfWeek={1}
                onTouchTapDay={this.handleTouchTapDay}
                mode={'portrait'}
                open={true}
                ref="main-calendar"
            />


        )
    }

}