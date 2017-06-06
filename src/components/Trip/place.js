import React, {Component} from 'react';
import { Card, List } from 'semantic-ui-react'
import { PlaceDescriptionItem } from './placeDescriptionItem';

import './styles.css';

export class PlaceCard extends Component {
  
  render() {

    const { data } = this.props

    return (
      <Card className={'place-card'} fluid={true} link>
        <Card.Content>
          <Card.Header>{data.name}</Card.Header>
          <Card.Meta>{data.type}</Card.Meta>
          <Card.Description>
            <List>
              <PlaceDescriptionItem icon={'marker'} text={data.location} />
              <PlaceDescriptionItem icon={'thermometer'} text={data.area} />
              <PlaceDescriptionItem icon={'phone'} text={data.phone} />
            </List>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
