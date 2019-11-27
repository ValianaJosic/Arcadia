import React, { Component } from "react"
import axios from "axios"

export default class Calendar extends React.Component {

    state = {
        weekDays: { U: '1', M: '2', T: '3', W: '4', R: '5', F: '6', S: '7' },
        weekDays_2: { U: '8', M: '9', T: '10', W: '11', R: '12', F: '13', S: '14' },
        weekDays_3: { U: '15', M: '16', T: '17', W: '18', R: '19', F: '20', S: '21' },
        weekDays_4: { U: '22', M: '23', T: '24', W: '25', R: '26', F: '27', S: '28' },
        weekDays_5: { U: '29', M: '30', T: '31' }
    }

    handleWeekDays = () => {
        const values = this.state.weekDays
        const valuesList = Object.keys(values).map(key =>
            <div id='home-body-date-container'>
                <div className='ft-nunito-10 ft-cr-blurple-berry'>
                    {key}
                </div>
                <a href="" id='home-body-date-container-value' className='ft-nunito-18 ft-cr-barney'>
                    {values[key]}
                </a>
            </div>
        )
        return valuesList
    }

    render() {
        return (
            <div id='home-body' className='bkgrd-cr-taupe'>
                <nav id='home-body-nav' className='bkgrd-cr-vanilla'>
                    <div id='home-body-nav-left' className='ft-ramabhadra-24 ft-cr-mixed-berries'>
                        <a href=''>
                            Month
                </a>
                        <svg height='10px' width='64px'>
                            <line x1="64" y1="0" className='home-body-nav-active-line' />
                        </svg>
                    </div>
                    <div id='home-body-nav-right' className='ft-ramabhadra-24 ft-cr-periwinkle'>
                        <a href=''>
                            Year
                </a>
                        {/* Need to make l/r display only when active
                <svg height='10px' width='64px'>
                    <line x1="64" y1="0" className='home-body-nav-active-line'/>
                </svg> */}
                    </div>
                </nav>
                <div id='home-body-month'>
                    <div id='home-body-month-left' className='ft-nunito-20 ft-cr-pleasent-purple' >
                        <span>December</span>
                    </div>
                    <a href=''>
                        <img src="https://arcadia-static-assets.s3.amazonaws.com/arcadia-svgs/close.svg" alt="close button" />
                    </a>
                </div>
                <div id='home-body-date'>
                    {
                        this.handleWeekDays()
                    }
                </div>
                <div id='home-body-dashboard'>
                    <div id='home-body-dashboard-div-1'>
                    </div>
                    <div id='home-body-dashboard-div-2'>
                        {/* <div id='home-body-dashboard-agenda'>
                  <div id='home-body-dashboard-agenda-div-1'>
                    <span className='ft-arimo-36 ft-cr-pure-white'>Today</span>
                  </div>
                  <div id='home-body-dashboard-agenda-div-2'>
                    <div>
                      <span className='ft-arimo-12 ft-cr-pure-white'>0 medications</span>
                    </div>
                    <div>
                      <span className='ft-arimo-12 ft-cr-pure-white'>0 appointments</span>
                    </div>
                    <div>
                      <span className='ft-arimo-12 ft-cr-pure-white'>0 notes</span>
                    </div>
                  </div>
                  <div id='home-body-dashboard-agenda-div-3'>
                    <a href='' className='ft-nunito-12 ft-cr-mixed-berries'>view agenda</a>
                  </div>
                </div> */}
                    </div>
                    <div id='home-body-dashboard-div-3'>
                    </div>
                </div>
            </div>
        )
    }

}