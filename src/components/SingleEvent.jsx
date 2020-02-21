import React, { Component } from 'react';
import moment from 'moment';
import heart from '../assets/love.png'

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
          <div className="venue-info">
            <h2>{this.props.venue}</h2>
            <h3>{this.props.city}</h3>
          </div>
          <div className="event-info">
            <h3>{newDate}</h3>
            <h4>Description: {this.props.description}</h4>
            <h4><a href={this.props.url} className='website-btn'>Visit Website</a></h4>
            {/* <img className='heart' src={require('../assets/love.png')} id={this.props.id} /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default SingleEvent;