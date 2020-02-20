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
                  <MapDisplay/>
                  <LocationDropDown/>
              </div>
          </div>
      </div>
      </Container>
    )
  }
}

export default MainPage;