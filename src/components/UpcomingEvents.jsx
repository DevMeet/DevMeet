import React, { Component } from 'react';

class UpcomingEvents extends Component {
  constructor(props) {
    super(props)
  };

  render() {
    const eventsCopy = this.props.events;
    // const eventsObj = eventsCopy.map((event, index) => (
    //   <SingleEvent
    //     event={event}
    //   />
    // ))
    return (
      <div className="upcomingevents">

      </div>
    )
  }
}

export default UpcomingEvents;