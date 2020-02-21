import React, { Component } from 'react';
import SingleEvent from './SingleEvent.jsx';

class Events extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    // console.log('in events this.props.events: ', this.props.events)
    const eventsArr = this.props.events.map(event => (
      <SingleEvent
      date={event.date}
      name={event.name}
      description={event.description}
      url={event.url}
      venue={event.venue}
      city={event.city}
      id={event.eventid}
      />
    ))
    return (
      <div>
        {eventsArr}
      </div>
    )
  }
}

export default Events;