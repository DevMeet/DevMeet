import React, { Component } from 'react'
import MapDisplay from '../components/MapDisplay.jsx'
import { Container, Row, Col } from 'react-bootstrap'
import LocationDropDown from '../components/LocationDropDown.jsx';

class MainPage extends Component {
  constructor (props) {
    super(props);

  };

  render () {
    return (
      <Container>
          <div className="fullscreen">
          <div className="maincontainer">
              <div className="googlemaps">
                  <LocationDropDown
                    selectedLocation={this.props.selectedLocation}
                    events={this.props.events}
                    eventCoordinates={this.props.eventCoordinates}
                    eventClicked={this.props.eventClicked}
                  />
              </div>
          </div>
      </div>
      </Container>
    )
  }
}

export default MainPage;