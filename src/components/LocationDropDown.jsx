import React, { Component } from 'react';
import Events from './Events.jsx';
import MapDisplay from '../components/MapDisplay.jsx';

class LocationDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.getEvents = this.getEvents.bind(this);
    // this.fetchFromAPI = this.fetchFromAPI.bind(this);
  }

  getEvents() {
    let e = document.getElementById('dropdown');
    let selectedLocation = e.options[e.selectedIndex].text;
    // console.log('inside getvents:', selectedLocation)
    fetch(`/events/retrieve`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ selectedLocation })
    })
      .then(response => response.json())
      .then(data => {
        console.log('data: ', data);
        this.setState(
          {
            ...this.state
          },
          () => {
            this.setState({
              events: data.events,
              eventClicked: true
            });
          }
        );
      })
      .catch(error => console.log(error));

    // let e = document.getElementById("dropdown");
    // let selectedLocation = e.options[e.selectedIndex].text;
    // console.log(selectedLocation)
    // this.setState({
    //   ...this.state
    //  }, () => {
    //   console.log('this.state: ', this.state)
    //   this.setState({
    //    selectedLocation: selectedLocation
    //  })})

    // fetch(`/events/retrieve/${this.state.selectedLocation}`)
    // .then(res => res.json())
    // .then(data => {
    //   this.setState({
    //     events: data
    //   })
    // })
    // .catch(err => { console.log(err); })
  }

  componentDidUpdate() {
    console.log(this.state);
    // console.log(this.props.events)
    // let e = document.getElementById("dropdown");
    // let selectedLocation = e.options[e.selectedIndex].text;
    // fetch(`/events/retrieve`, {
    //   method: 'POST',
    //   body: JSON.stringify(selectedLocation)
    // }).then(function(response) {
    //   return response.json();
    // }).then(function(data) {
    //   console.log(data)
    // })
  }

  fetchFromAPI() {
    fetch('/events')
      .then(res => res.json())
      .then(data => {
        let cityEvents = [];
        // console.log('inside fetchfromapi', data);
        data.forEach(events => {
          if (events.city === this.state.selectedLocation) {
            cityEvents.push(events);
          }
        });
        // console.log(cityEvents);
        this.setState({
          events: data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    // console.log('this is inside locationdropdown', this.props)
    return (
      <div>
        <MapDisplay events={this.state.events} />
        <div className="events-body">
          <select className="dropdown" id="dropdown" name="dropdown-locations">
            <option value="services" defaultValue="">
              Select A Location
            </option>
            <option key="1" value="Los Angeles">
              Los Angeles
            </option>
            <option key="2" value="San Francisco">
              San Francisco
            </option>
            <option key="3" value="New York">
              New York
            </option>
            <option key="4" value="Seoul">
              Seoul
            </option>
          </select>
          <input
            id="get-event-button"
            type="submit"
            onClick={this.getEvents}
            value="Search For Local Events"
          />
          {/* <button id="get-event-button" onClick={this.fetchFromAPI}>
            TEMP Fetch from API
          </button> */}
          <Events className="events" events={this.state.events} />
        </div>
      </div>
    );
  }
}

export default LocationDropDown;
