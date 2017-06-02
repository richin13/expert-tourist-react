/**
 * Created by ricardo on 01/06/17.
 */
import _ from "lodash";
import React, {Component} from "react";

import FaSpinner from "react-icons/lib/fa/spinner";

import {
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from "react-google-maps";
import withScriptjs from 'react-google-maps/lib/async/withScriptjs'

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GettingStartedGoogleMap = withScriptjs(withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={8}
    defaultCenter={props.center}>
    {props.directions && <DirectionsRenderer directions={props.directions}/>}
  </GoogleMap>
)));

export class MainMap extends Component {

  state = {
    origin: new google.maps.LatLng(9.827529, -83.8689483),
    destination: new google.maps.LatLng(41.8525800, -87.6514100),
    directions: null,
  };

  componentDidMount() {
    const DirectionsService = new google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.state.origin,
      destination: this.state.destination,
      travelMode: google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: result,
        });
      } else {
        console.error('error fetching directions ${result}');
      }
    });
  }

  render() {
    // {lat: 9.827529, lng: -83.8689483}
    return (
      <div style={{position: 'absolute', width: '100%', height: '100%'}}>
        <GettingStartedGoogleMap
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAjamE_DuQIvrCgo3D6kdGr5VngHz7GelY"
          loadingElement={
            <div style={{ height: '100%' }}>
              <FaSpinner
                style={{
                  display: 'block',
                  width: '80px',
                  height: '80px',
                  margin: '150px auto',
                  animation: 'fa-spin 2s infinite linear',
                }}
              />
            </div>
          }
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
