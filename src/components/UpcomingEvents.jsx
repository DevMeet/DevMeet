import React, { Component } from 'react';

class UpcomingEvents extends Component {
  constructor(props) {
    super(props)
  };


  //Need data to populate this div!
  render() {
      console.log('inside upcoming events:', this.props)
    // console.log('this is inside upcoming events:', this.props.events.url)
    // const events = this.props.events
    // console.log(JSON.parse(events))
    // this.props.events
    return (
      <div className="upcomingevents">

      </div>
    )
  }
}

export default UpcomingEvents;