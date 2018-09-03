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
                    title={'president'} 
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
                    <Card name={'Bram Wallace'} 
                    title={'Backpacking/Hiking Chair'} 
                    image={'BramWallace.jpg'}
                    description={"Hiking, trail running, backpacking, kayaking, surfing, literally anything"}
                    major={"Applied Math"}
                    year={"2nd year PhD"}
                    funfact={"I've been growled at by a mama mountain lion standing over her 3 cubs"}
                    />
                    <Card name={'Cat Ly'} 
                    title={'Backpacking/Hiking Trip Leader'} 
                    image={'CatLy.jpg'}
                    description={"hugging trees, backpacking and hiking, nature and landscape photography, environmental sustainability; Cornell Outdoor Education instructor"}
                    major={"Chemistry"}
                    year={"2019"}
                    funfact={"Years and years ago, at a Buddhist temple atop a mountain in foggy California, I pet a wolf that was living among the temple monks. I relate to her on a spiritual level. Her name was Mimi, and she was quite the lone wolf; occasionally, she would visit the peaceful monks of the temple and walk alongside them. Someday, I hope to live a life as diverse and exciting as Mimi's as an Icelandic hermit."}
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