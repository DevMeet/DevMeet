import React, { Component } from 'react'
import SideBar from '../components/SideBar.jsx'
import MapDisplay from '../components/MapDisplay.jsx'
import UpcomingEvents from '../components/UpcomingEvents.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import LocationDropDown from '../components/LocationDropDown.jsx';

class MainPage extends Component {
  constructor (props) {
    super(props);
  
  this.fetchFromAPI = this.fetchFromAPI.bind(this);
  };

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

  render () {
    return (
      <div className="fullscreen">
          <div className="maincontainer">
              <div className="googlemaps">
                  <MapDisplay/>
                  <LocationDropDown/>
                  <button onClick={this.fetchFromAPI}>Fetch from API</button>
              </div>
          </div>
      </div>

    )
  }
}

export default MainPage;