import React, { Component } from 'react';
import './LandingBody.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { FaFacebookSquare } from 'react-icons/fa';
import { IconContext } from 'react-icons';

class LandingBody extends Component {
    render() {
        return (
            <div className="landingbody">
                <div className = "cf ph2-ns">
                    <div className = "fl w-60 pa2">
                        <h1>UPCOMING EVENT</h1>
                    </div>
                </div>  
            </div>          
        );
    }
}

export default LandingBody;