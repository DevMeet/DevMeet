import React, { Component } from 'react';

class Events extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    const eventsArr = this.props.events.map(event => (
      <SingleEvent
      date={event.date}
      name={event.name}
      description={event.description}
      url={event.url}
      venue={event.venue}
      city={event.city}
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