import React, { Component } from 'react';
import './CalendarEvent.css'; 


class CalendarEvent extends Component {
    constructor(props){
        super(props);
        this.state = { 
            difficultyClass: 'fl w-20 pa calendarevent--difficulty calendarevent--default',
            infoShow: false, 
            difficultyName: 'meeting'
        }
        this.showInfo = this.showInfo.bind(this);
    }
    componentDidMount() {
        if (this.props.difficulty === 'easy'){
            this.setState({
                difficultyClass: 'calendarevent--difficulty calendarevent--easy fl w-20 pa',
                difficultyName: 'easy'
            })
        }
        else if (this.props.difficulty === 'moderate'){
            this.setState({
                difficultyClass: 'calendarevent--difficulty calendarevent--moderate fl w-20 pa',
                difficultyName: 'moderate'
            })
        }
        else if (this.props.difficulty === 'difficult'){
            this.setState({
                difficultyClass: 'calendarevent--difficulty calendarevent--difficult fl w-20 pa',
                difficultyName: 'difficult'
            })
        }
        else {
            this.setState({
                difficultyName: this.props.difficulty
            })
        }
    }
    showInfo(e) {
        this.setState({ infoShow: !this.state.infoShow });
    }
    render() {
        return (
            <div className = "calendarevent--wrapper">
            <div className = "calendarevent--header">
                <div className = "calendarevent--date fl w-10 pa"> {this.props.date}</div>
                <div className = {this.state.difficultyClass}> {this.props.difficulty}</div>
                <div className = "calendarevent--description fl pa" onClick={this.showInfo}>
                    <svg viewbox= "0 0 400 400" height="20" width="20">
                        <path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		                c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/>
                    </svg>
                    {this.props.description}
                
                </div> 
            </div>
            <Info infoShow={this.state.infoShow} info={this.props.info} location={this.props.location} time={this.props.time}/>
            </div>
        );
    }
}

class Info extends Component {
    render() {
        if (this.props.infoShow) {
            return (<div className="calendarevent--info"><div className="calendarevent--what text-default"><strong>What: </strong>{this.props.info}</div><div className="calendarevent--where text-default"><strong>Where: </strong> {this.props.location}</div><div className="calendarevent--when text-default"><strong>When: </strong>{this.props.time}</div></div>);
        }
        else {
            return null;
        }
    }
}


export default CalendarEvent;