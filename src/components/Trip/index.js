import React, {Component} from 'react';
import classnames from 'classnames';

import { MainMap } from './Map';
import { PlaceCard } from './place';
import { placeData, destinations } from './demoData.js';

import './styles.css';

export default class Trip extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      placeData: [],
      destinations: destinations
    }
  }

  componentDidMount() {
    this.setState({
      placeData: placeData,
      destinations: destinations
    })
  }

  render() {
    const {className} = this.props;

    return (
      <div className={classnames('ui padded grid', className)}>
        <div className={classnames('four wide column', className)}>
          <h2 className={'ui header'}>Destinations</h2>

          {this.state.placeData.map(place => (
            <PlaceCard key={place.id} data={place}/>
          ))}
        </div>
        <div className={classnames('twelve wide column', className)}>
          <MainMap destinations={this.state.destinations}/>
        </div>
      </div>
    );
  }
}
