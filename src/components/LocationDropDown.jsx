import React, { Component } from 'react';

class LocationDropDown extends Component {
  constructor(props) {
    super(props)
    this.getEvents = this.getEvents.bind(this);
  };

  getEvents() {

    const selectedLocation = document.querySelector('#dropdown-locations').value;
    console.log('set state selectedLocation: ', selectedLocation)
    this.setState({ 
      selectedLocation
    })
    console.log('this.state: ', this.state)
    // fetch(`/events/retrieve/${this.state.selectedLocation}`)
    // .then(res => res.json())
    // .then(data => {
    //   this.setState({
    //     events: data
    //   })
    // })
    // .catch(err => { console.log(err); })
  }

  render() {
    return (
      <div>
          {/* <form class="get-events"> */}
          {/* <form class="get-events" action="/events" method="GET"> */}
         <select id="dropdown-locations" name="dropdown-locations">
          <option value="services" defaultValue="">Select A Location</option>
          <option key='1' value='Los Angeles'>Los Angeles</option>
          <option key='2' value='San Francisco'>San Francisco</option>
          <option key='3' value='New York'>New York</option>
        </select>
        <input id='get-event-button' type="submit" onClick={this.getEvents} value="Search For Local Events" />
        {/* </form> */}
      </div>
    )
  }
}

export default LocationDropDown;