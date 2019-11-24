import React, { Component } from 'react'
import axios from 'axios'

export const headers = ReactOnRails.authenticityHeaders()

export default class Home extends React.Component {
  state = {
    weekDays: { Su: '17', M: '18', T: '19', W: '20', Th: '21', F: '22', S: '23'}
  }

  handleWeekDays = () => {
    const values = this.state.weekDays
    const valuesList = Object.keys(values).map(key =>
      <div id='home-body-date-container'>
        <div className='ft-nunito-10 ft-cr-blurple-berry'>
          {key}
        </div>
        <div id='home-body-date-container-value' className='ft-nunito-18 ft-cr-barney'>
          {values[key]}
        </div>
      </div>
    )
    return valuesList
    }

  render() {
    return(
      <div id='home-body' className='bkgrd-cr-taupe'>
        <nav id='home-body-nav' className='bkgrd-cr-vanilla'>
          <div id='home-body-nav-left' className='ft-ramabhadra-24 ft-cr-mixed-berries'>
            <div>
              Treatment
            </div>
            <svg height='10px' width='64px'>
                <line x1="64" y1="0" className='home-body-nav-active-line'/>
            </svg>
          </div>
          <div id='home-body-nav-right' className='ft-ramabhadra-24 ft-cr-periwinkle'>
            <div>
              Educate
            </div>
            {/* Need to make l/r display only when active
            <svg height='10px' width='64px'>
                <line x1="64" y1="0" className='home-body-nav-active-line'/>
            </svg> */}
          </div>
        </nav>
        <div id='home-body-month'>
          <div id='home-body-month-left' className='ft-nunito-20 ft-cr-pleasent-purple'>
            November
          </div>
          <div id='home-body-month-right'>
            <i className="far fa-calendar-alt ft-cr-barney" id="home-body-month-cal-icon"></i>
          </div>
        </div>
        <div id='home-body-date'>
          {this.handleWeekDays()}
        </div>
        <div id='home-body-dashboard'>
        </div>
      </div>
      )
    }
  }