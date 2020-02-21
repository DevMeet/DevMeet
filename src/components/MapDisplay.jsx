// this is a react component wow

import React, { Component } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker } from 'react-google-maps';

class MapDisplay extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {}

  render() {
    let eventArr = this.props.events;
    console.log('i am in here', eventArr);

    // const markerList = [];
    // eventArr.forEach(event => {
    //   console.log('inside foreach', event.latitude);
    //   markerList.push(<Marker
    //     position={{ lat: event.latitude, lng: event.longitude}}
    //   />);
    // })
    // console.log('this is markerlist', markerList)
    // const eventCoordinates = this.props.eventCoordinates
    console.log('inside mapdisplay', this.props.eventClicked);
    function Map() {
      return (
        <GoogleMap defaultZoom={10} defaultCenter={{ lat: 34.052235, lng: -118.243683 }}>
          ))}
          {eventArr.map((marker, i) => (
            <Marker
              key={i}
              position={{ lat: Number(marker.latitude), lng: Number(marker.longitude) }}
              icon={{
                scaledSize: new window.google.maps.Size(30, 30)
              }}
            />
          ))}
          {/* <Marker
              position={{ lat: 33.9759755, lng: -118.39088770000001 }}
            />
            <Marker
              position={{ lat: 34.0510948, lng: -118.25439169999999 }}
            />
            <Marker
              position={{ lat: 34.102321, lng: -118.33998989999998 }}
            /> */}
        </GoogleMap>
      );
    }

    const MapWrapped = withScriptjs(withGoogleMap(Map));
    return (
      <div className="map">
        <MapWrapped
          googleMapURL={
            'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyABc2ZRJ4eqDNoO7r_qGSiHwr5drpWYADM'
          }
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '100%' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}
export default MapDisplay;
