import React from 'react';
import ReactDOM from 'react-dom';
 
// ... and fullcalendar-reactwrapper.
import FullCalendar from 'fullcalendar-reactwrapper';
import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
 
class FullCalendar1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        events:[
                {
                    title: 'All Day Event',
                    start: '2018-09-07', 
                    end: '2018-09-09'
                }
        ],
    }
  }
 
  render() {
    return (
      <div id="example-component">
        <FullCalendar
             id = "your-custom-ID"
         header = {{
            left: 'prev,next today myCustomButton',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        }}
        navLinks= {true} // can click day/week names to navigate views
        editable= {true}
        eventLimit= {true} // allow "more" link when too many events
        event = {this.state.events}	
    />
      </div>
    );
  }
}

export default FullCalendar1; 