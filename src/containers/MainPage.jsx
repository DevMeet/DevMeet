import React, { Component } from 'react'
import SideBar from '../components/SideBar.jsx'
import MapDisplay from '../components/MapDisplay.jsx'
import UpcomingEvents from '../components/UpcomingEvents.jsx'

class MainPage extends Component {
  constructor (props) {
    super(props);
  };

  render () {
    return (
        <div className="fullscreen">
            <div className="maincontainer">
                <div>
                    <SideBar/>
                </div>
                <div className="googlemaps">
                    <MapDisplay/>
                </div>
                <div>
                    <UpcomingEvents
                      events={this.props.events}
                      // name={this.props.name}
                      // date={this.props.date}
                      // description={this.props.description}
                      // url={this.props.url}
                      // longitude={this.props.longitude}
                      // latitude={this.props.latitude}
                    />
                </div>
            </div>
        </div>

    )
  }
}

export default MainPage;