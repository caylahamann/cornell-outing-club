import React, { Component } from 'react';
import './Board.css';
import Nav from './components/Nav';
import Card from './components/Card';
import Footer from './components/Footer';



class Board extends Component {
    render() {
        return(
            <div>
                <div className="sticky-navbar">
                <Nav/>
                </div>
                <h1>Meet the E-Board</h1>
                <hr/>
                <div className="cards flex flex-wrap justify-center">
                    <Card name={'Anya Sherman'} 
                    title={'co-president'} 
                    image={'AnyaSherman.jpg'}
                    description={"I love running, climbing, backpacking, kayaking and hammocking.  I'm an Outdoor Odyssey Guide, as well as teaching rock climbing for COE, and am very involved with Cornell Running Club."}
                    major={"Environmental Engineering"}
                    year={"2020"}
                    funfact={"I spent the summer working in Yellowstone last year and have yet to get over it"}
                    />
                    <Card name={'Hadi Zayer'} 
                    title={'co-president'} 
                    image={'HadiZayer.jpg'}
                    description={"Everything related to the outdoors! From ice climbing and mountaineering to kayaking!"}
                    major={"ECE and Computer Science"}
                    year={"2020"}
                    funfact={"Mt. Washington was my very first winter hike :)"}
                    />
                    <Card name={'Emma Renner'} 
                    title={'vice president, paddle chair'} 
                    image={'EmmaRenner.jpg'}
                    description={"Outdoor Odyssey Guide. COE Sea Kayaking Instructor. Montreat Wilderness Ranger. General backpacking/mountain/camping/GORP enthusiast"}
                    major={"Mechanical Engineering"}
                    year={"2020"}
                    funfact={"I have camped in Maine during a hurricane and kayaked in Canada during a tropical storm."}
                    />
                    <Card name={'Josh Lachs'} 
                    title={'Secretary'} 
                    image={'JoshLachs.jpg'}
                    description={"Mountain biking, extreme ironing, paddling, skiing, cheese rolling, backpacking"}
                    major={"Environmental Engineering"}
                    year={"2021"}
                    funfact={"Hadi knows no fun"}
                    />
                    <Card name={'Jackson Siff'} 
                    title={'Trip Leader'} 
                    image={'JacksonSiff.jpg'}
                    description={"Climbing, skiing, biking, backpacking"}
                    major={"Mechanical Engineering"}
                    year={"2019"}
                    funfact={"In middle school I auditioned for the lead role for Diary of a Wimpy Kid"}
                    />
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Board;