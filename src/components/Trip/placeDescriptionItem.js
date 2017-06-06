import React, {Component} from 'react';
import { List } from 'semantic-ui-react'

import './styles.css';

export class PlaceDescriptionItem extends Component {

  render() {
    const { icon } = this.props
    const { text } = this.props

    return (
      <List.Item>
        <List.Icon name={icon} />
        <List.Content>
          <List.Description>{text}</List.Description>
        </List.Content>
      </List.Item>
    );
  }
}
