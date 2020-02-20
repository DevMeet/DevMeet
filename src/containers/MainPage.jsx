import React, { Component } from 'react'
import SideBar from '../components/SideBar.jsx'
import MapDisplay from '../components/MapDisplay.jsx'
import UpcomingEvents from '../components/UpcomingEvents.jsx'
import { Container, Row, Col } from 'react-bootstrap'

class MainPage extends Component {
  constructor (props) {
    super(props);
  };


  render () {
    console.log('this is inside mainpage:', this.props.events)
    return (
        <div className="fullscreen">
            <div className="maincontainer">
                <div>
                    <SideBar
                      loggedIn={this.props.loggedIn}
                      loginHandleClick={this.props.loginHandleClick}
                    />
                </div>
                <div className="googlemaps">
                    <MapDisplay/>
                </div>
                <div>
                    <UpcomingEvents
                      events={this.props.events}
                    />
                </div>
            </div>
        </div>

    )
  }
}

export default MainPage;