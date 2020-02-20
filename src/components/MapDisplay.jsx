//this is a react component wow

import React, { Component } from 'react';
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";

class MapDisplay extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    function Map() {
      return (
          <GoogleMap
          defaultZoom={10}
          defaultCenter={{lat: 34.052235, lng: -118.243683}}
          >
            <Marker
              position={{ lat: 34.052235, lng: -118.243683 }}
            />
            <Marker
              position={{ lat: 34.052235, lng: -119.243683 }}
            />
          </GoogleMap>
      )
  }
  
  const MapWrapped = withScriptjs(withGoogleMap(Map));
      return (
          <div className="map">
              <MapWrapped 
              googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABc2ZRJ4eqDNoO7r_qGSiHwr5drpWYADM'}
              loadingElement={<div style={{height: '100%'}} /> }
              containerElement={<div style={{height: '100%'}} /> }
              mapElement={<div style={{height: '100%'}} /> }
              />
          </div>  
      )
  }
}
export default MapDisplay;