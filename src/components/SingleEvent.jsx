import React, { Component } from 'react';
const moment = require('moment');

class SingleEvent extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    const newDate = moment(this.props.date).format('MMMM D, Y')
    return (
      <div className="event-box">
        <h1>{this.props.name}</h1>
        <div style={{ display: 'flex' }}>
          <div>
            <h2>Venue: {this.props.venue}</h2>
            <h2>{this.props.city}</h2>
          </div>
          <div>
            <h3>{newDate}</h3>
            <h4>Description: {this.props.description}</h4>
            <h4><a href={this.props.url}>Visit Website</a></h4>
          </div>
        </div>
      </div>
    )
  }
}

export default SingleEvent;