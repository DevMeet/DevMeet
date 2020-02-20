// this is a react component wow

import React, { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

class MapDisplay extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    function Map() {
      return (
        <GoogleMap defaultZoom={8} defaultCenter={{ lat: 34.052235, lng: -118.243683 }}>
          <Marker position={{ lat: 34.052235, lng: -118.243683 }} />
          <Marker position={{ lat: 34.052235, lng: -119.243683 }} />
        </GoogleMap>
      );
    }

    const MapWrapped = withScriptjs(withGoogleMap(Map));
    return (
      <div>
        <div style={{ width: '60vw', height: '40vh' }}>
          <MapWrapped
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABc2ZRJ4eqDNoO7r_qGSiHwr5drpWYADM"
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={<div style={{ height: '100%' }} />}
          />
        </div>
      </div>
    );
  }
}
export default MapDisplay;
