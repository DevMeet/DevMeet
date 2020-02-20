import React, { Component } from 'react';

class LocationDropDown extends Component {
  constructor(props) {
    super(props)
    this.getEvents = this.getEvents.bind(this);
    this.fetchFromAPI = this.fetchFromAPI.bind(this);
  };

  getEvents() {
    let e = document.getElementById("dropdown-locations");
    let selectedLocation = e.options[e.selectedIndex].text;
    console.log(selectedLocation)
    this.setState({
      ...this.state
     }, () => { 
      console.log('this.state: ', this.state)
      this.setState({
       selectedLocation: selectedLocation
     })})

    fetch(`/events/retrieve/${this.state.selectedLocation}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        events: data
      })
    })
    .catch(err => { console.log(err); })
  }

  componentDidUpdate() {
    fetch(`/events/retrieve/${this.state.selectedLocation}`, {
      method: 'POST',
      body: JSON.stringify(this.state.selectedLocation)
    }).then(function(response) {
      return response.json();
    }).then(function(data) {
      console.log(data)
    })
  }

  fetchFromAPI() {
    fetch('/events')
    .then(res => res.json())
    .then(data => {
      this.setState({
        events: data
      })
    })
    .catch(err => { console.log(err); })
  }

  render() {
    console.log('this is inside locationdropdown', this.props)
    return (
      <div>
        <select id="dropdown" onChange={() => this.getEvents()}>
          <option value="1" selected="selected" disabled>Select Region</option>
          <option value="2">LA</option>
          <option value="3">SF</option>
          <option value="4">NY</option>
        </select>
          {/* <form class="get-events"> */}
          {/* <form class="get-events" action="/events" method="GET"> */}
         {/* <select id="dropdown-locations" name="dropdown-locations">
          <option value="services" defaultValue="">Select A Location</option>
          <option key='1' value='Los Angeles'>Los Angeles</option>
          <option key='2' value='San Francisco'>San Francisco</option>
          <option key='3' value='New York'>New York</option>
        </select>
        <input id='get-event-button' type="submit" onChange={this.getEvents} value="Search For Local Events" /> */}
        <input id='get-event-button' type="submit" onClick={this.getEvents} value="Search For Local Events" />
        <button onClick={this.fetchFromAPI}>TEMP Fetch from API</button>
        {/* </form> */}
      </div>
    )
  }
}

export default LocationDropDown;