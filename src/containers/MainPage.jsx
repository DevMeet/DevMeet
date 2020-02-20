import React, { Component } from 'react'
import SideBar from '../components/SideBar.jsx'
import MapDisplay from '../components/MapDisplay.jsx'
import UpcomingEvents from '../components/UpcomingEvents.jsx'

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
                      // name={this.props.events.name}
                      // description={this.props.events.description}
                      // date={this.props.events.date}
                      // url={this.props.events.props.url}
                    />
                </div>
            </div>
        </div>

    )
  }
}

export default MainPage;