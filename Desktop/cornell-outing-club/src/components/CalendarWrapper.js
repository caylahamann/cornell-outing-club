import React, { Component } from 'react';
import FullCalendar from './FullCalendar';
import Calendar from './Calendar';
import './CalendarWrapper.css';

class CalendarWrapper extends Component {
    constructor(props){
        super(props);
        this.state = {
            fullCalendar: false
        }
        this.showCalendar = this.showCalendar.bind(this);
    }
    showCalendar(e) {
        this.setState({ fullCalendar: !this.state.fullCalendar});
    }
    render() {
        if (this.state.fullCalendar === false){
            return (
                <div>
                <h2 className="calendarwrapper--header"><span className="calendar--text" onClick={this.showCalendar}>List</span><span>  </span><span className="calendar-bold calendar--text">Full Calendar</span></h2>
                <div className="fullcalendar--width--wrapper"><FullCalendar/></div>
                </div>
            )
        } else {
            return (
                <div>
                <h2 className="calendarwrapper--header"><span className="calendar-bold calendar--text">List</span><span>  </span><span className="calendar--text" onClick={this.showCalendar}>Full Calendar</span></h2>
                <Calendar/>
                </div>
            )
        }
    }
}

export default CalendarWrapper;