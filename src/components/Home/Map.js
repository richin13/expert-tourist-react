/**
 * Created by ricardo on 01/06/17.
 */
import React, {Component} from "react";
import {withGoogleMap, GoogleMap, DirectionsRenderer} from "react-google-maps";
import {toast} from 'react-toastify';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={8}
    defaultCenter={props.center}>
    {props.directions && <DirectionsRenderer directions={props.directions}/>}
  </GoogleMap>
));

export class MainMap extends Component {

  constructor() {
    super();

    this.determineOrigin();

    // It doesn't matter the actual values of origin
    // and destination since this will be properly
    // updated when the user decide where he/she wants to go.
    this.state = {
      origin: new window.google.maps.LatLng(9.827529, -83.8689483),
      destination: new window.google.maps.LatLng(9.827529, -83.6514100),
      directions: null,
    };
  }

  determineOrigin() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({coords}) => {
        const origin = new window.google.maps.LatLng(coords.latitude, coords.longitude);
        const DirectionsService = new window.google.maps.DirectionsService();

        // DirectionsService.route({
        //   origin: origin,
        //   destination: this.state.destination,
        //   travelMode: window.google.maps.TravelMode.DRIVING,
        // }, (result, status) => {
        //   if (status === window.google.maps.DirectionsStatus.OK) {
        //     this.setState({
        //       directions: result,
        //     });
        //   } else {
        //     console.error('error fetching directions ${result}');
        //   }
        // });
        // TODO: call some prop here to update the origin's text box
      })
    }
  }

  componentDidMount() {
    toast('Hello, world! You map is ready', {type: 'info'});
    // const DirectionsService = new window.google.maps.DirectionsService();
    //
    // DirectionsService.route({
    //   origin: this.state.origin,
    //   destination: this.state.destination,
    //   travelMode: window.google.maps.TravelMode.DRIVING,
    // }, (result, status) => {
    //   if (status === window.google.maps.DirectionsStatus.OK) {
    //     this.setState({
    //       directions: result,
    //     });
    //   } else {
    //     console.error('error fetching directions ${result}');
    //   }
    // });
    this.setState({
      loader: {
        active: false
      }
    })
  }

  render() {
    // {lat: 9.827529, lng: -83.8689483}
    return (
      <div style={{position: 'absolute', width: '100%', height: '100%', z_index: 1}}>
        <GettingStartedGoogleMap
          containerElement={
            <div style={{
              position: 'relative',
              left: 0,
              right: 0,
              bottom: 0,
              top: 0,
              width: '100%',
              height: '100%',
              display: 'inherit',
              overflow: 'hidden'
            }}/>
          }
          mapElement={
            <div style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              background: 'rgb(229, 227, 223)'
            }}/>
          }
          center={this.state.origin}
          directions={this.state.directions}
        />
      </div>
    );
  }
}
