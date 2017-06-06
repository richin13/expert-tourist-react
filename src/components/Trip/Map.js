import React, {Component} from "react";
import { withGoogleMap, GoogleMap, DirectionsRenderer } from "react-google-maps";

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

    this.state = {
      directions: null
    };
  }

  componentDidMount() {
    this.setState({
      loader: { active: false }
    })
  }

  render() {

    const DirectionsService = new window.google.maps.DirectionsService();

    DirectionsService.route({
      origin: this.props.destinations.origin,
      destination: this.props.destinations.destination,
      waypoints: this.props.destinations.stops,
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        this.setState({ directions: result });
      }
    });

    return (
      <div style={{width: '100%', height: '100%', z_index: 1}}>
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
