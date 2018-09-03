import React, { Component } from 'react';
import './Calendar.css';
import CalendarEvent from './CalendarEvent.js';

class Calendar extends Component {
    render() {
        return (
            <div>
                <div className="calendar--header">
                    <div className="calendar--header--date fl w-10 pa">DATE</div>
                    <div className="calendar--header--difficulty fl w-20 pa">DIFFICULTY</div>
                    <div className="calendar--header--description fl w-70 pa">DESCRIPTION</div>
                </div>

                <CalendarEvent date= "9/07-9/09" difficulty="difficult" description="90 Mile Canoe Classic" info="3 day 90 mile canoe race from Old Forge to Saranac Lake" location="Adirondack Mountains" time="All day 09/07-09/09"/>
                <CalendarEvent date= "9/07" difficulty="other" description="Waterfalls of Ithaca Presentation" info="Come listen to a free presentation about the waterfalls of Ithaca!" location="Lime Hollow Center for Environment and Culture, 338 McLean Rd, Cortland, NY 13045, USA"/>
                <CalendarEvent date ="9/11" description="First Gbody Meeting" info="First general body meeting of the year! Come to officially register for outing club and learn how the club works and about some upcoming events!" location="Uris Hall, G01" difficulty="meeting"/>
                <CalendarEvent date = "9/15" difficulty="other" description="Mink Barn Work Party" location="Mink Barn (rides can be provided)" info="Come help us clean, organize, and inventory our whitewater kayaking and biking gear.  Food and music will be provided, and the chance to bike around one of the most beautiful off campus areas."/>
                <CalendarEvent date = "9/22-9/23" difficulty="difficult" description="Beaver River Whitewater festival" location="Beaver River" info="Whitewater kayaking festival here in NY! If you have whitewater kayaking experience, come enjoy the whitewater community and class 3-5 rapids!" time="All day"/>
                <CalendarEvent date ="9/29" difficulty="moderate" description="Sunfish Pond Bouldering Trip" location="Sunfish Pond, PA" info="Bouldering day trip to Sunfish Pond, PA! Climbing experience is recommended but not required.  No belay experience needed."/>
                <CalendarEvent date = "10/6-10/7" difficulty="moderate" description="Giant- Rocky Peak Ridge hike" location="Adirondacks" info="Come hike one of the most beautiful Fall hikes in the Adirondacks.  This hike is about 15 miles, and summits two High Peaks."/>
            </div>
        );
    }
}

export default Calendar; 