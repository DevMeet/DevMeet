import React, { Component } from 'react';
import MapDisplay from '../components/MapDisplay.jsx';

class MainPage extends Component {
  constructor (props) {
    super(props);
  };

  render () {
    return (
      <div className="fullscreen">
          <div className="maincontainer">
              <div className="googlemaps">
                  <MapDisplay/>
              </div>
          </div>
      </div>

    )
  }
}

export default MainPage;