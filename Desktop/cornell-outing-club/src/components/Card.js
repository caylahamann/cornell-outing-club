import React, { Component } from 'react';
import './Card.css';


class Card extends Component {
    render() {
        return(
            <div className="card--wrapper">
                <div className = "card--header">
                <div className="card--header--name">{this.props.name}</div>
                <div className="card--header--title">{this.props.title}</div>
                </div>
                <div className = "card--image">
                    <img src= {require('../images/'+this.props.image)}/>
                    <div className="card--image--text">
                        <span className="card--image--text--major">{this.props.major} || {this.props.year}</span>
                    <div className="card--image--text--funfact">
                        <span className="bold">Fun Fact:</span> {this.props.funfact}
                    </div>
                    <div className = "card--image--text--interests">
                        <span className="bold">Outdoor Interests: </span>{this.props.description}
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;