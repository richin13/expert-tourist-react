/**
 * Created by ricardo on 01/06/17.
 */
import React, {Component} from "react";


import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

/*
 * This is the modify version of:
 * https://developers.google.com/maps/documentation/javascript/examples/event-arguments
 *
 * Add <script src="https://maps.googleapis.com/maps/api/js"></script> to your HTML to provide google.maps reference
 */
const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{lat: 9.827529, lng: -83.8689483}}
    onClick={props.onMapClick}
  >
    {props.markers.map(marker => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(marker)}
      />
    ))}
  </GoogleMap>
));

export class MainMap extends Component {

  constructor() {
    super();

    this.state = {
      markers: [],
    };

    this.handleMapLoad = this.handleMapLoad.bind(this);
    this.handleMapClick = this.handleMapClick.bind(this);
    this.handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
  }

  handleMapLoad(map) {
    this._mapComponent = map;
    if (map) {
      console.log('Zoom: ' + map.getZoom());
    }
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */
  handleMapClick(event) {
    const nextMarkers = [
      ...this.state.markers,
      {
        position: event.latLng,
        defaultAnimation: 2,
        key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
      },
    ];
    this.setState({
      markers: nextMarkers,
    });
  }

  handleMarkerRightClick(targetMarker) {
    /*
     * All you modify is data, and the view is driven by data.
     * This is so called data-driven-development. (And yes, it's now in
     * web front end and even with google maps API.)
     */
    const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
    this.setState({
      markers: nextMarkers,
    });
  }

  render() {
    return (
      <div id="map-container">
        <div style={{height: '100%', width: '100%'}}>
          <GettingStartedGoogleMap
            containerElement={
              <div style={{height: `100%`, width:`100%`}}/>
            }
            mapElement={
              <div style={{height: `100%`, width: `100%`}}/>
            }
            onMapLoad={this.handleMapLoad}
            onMapClick={this.handleMapClick}
            markers={this.state.markers}
            onMarkerRightClick={this.handleMarkerRightClick}
          />
        </div>
      </div>

    );
  }
}
