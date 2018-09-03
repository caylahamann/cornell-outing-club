import React, { Component } from 'react';
import './LandingNav.css';

class LandingNav extends Component {
    render() {
        return(
            <div className="landingnav--wrapper">
                <div className="left-content">
                <div className="landingnav--dropdown">
                    <div className="float-left landingnav--item"><a href="">Who We Are</a></div>
                    <div className="landingnav--dropdown--items">
                        <div className="landingnav--dropdown--item"><a href="#">About COC</a></div>
                        <div className="landingnav--dropdown--item"><a href="/board">E-Board</a></div>
                    </div>
                </div>
                <div className="float-left landingnav--item"><a href="/activities">Activities Calendar</a></div>
                <div className="float-left landingnav--item"><a href="#">Resources</a></div>
                </div>
                <div className="right-content">
                    <div className="float-right landingnav--item"><a href="#">LOGIN</a></div>
                </div>
            
            </div>
        );
    }
}

export default LandingNav;