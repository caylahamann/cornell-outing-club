import React, { Component } from 'react';
import './Landing.css';
import LandingHeader from './components/LandingHeader';
import LandingNav from './components/LandingNav';
import LandingBody from './components/LandingBody';
import Footer from './components/Footer';

class Landing extends Component {
  render() {
    return (
      <div>
        <LandingHeader/>
        <LandingNav/>
        <LandingBody/>
        <Footer/>
      </div>
    );
  }
}

export default Landing;
