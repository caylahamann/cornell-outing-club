import React, { Component } from 'react'; 
import './Activities.css';
import Nav from './components/Nav'; 
import Footer from './components/Footer'; 
import Calendar from './components/Calendar';
import FullCalendar from './components/FullCalendar';
import CalendarWrapper from './components/CalendarWrapper';

class Activities extends Component {
    render() {
        return (
            <div >
                <Nav/>
                    <h1>Activities Calendar</h1>
                    <CalendarWrapper/>
                <Footer/>
            </div>
        )
    }
}

export default Activities; 