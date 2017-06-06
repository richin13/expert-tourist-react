import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Segment, Dropdown } from 'semantic-ui-react'
import { PlacesSearch } from './placesSearch'
import { tripDurations, recomendationTypes } from './demoData'

import './styles.css';

export class WelcomeForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      showResults: false,
    }
  }

  handleClick = () => {
    this.setState({ showResults: true })
  }

  render() {
    const { showResults } = this.state

    if (showResults) {
      return (
        <Redirect to={'/trip'}/>
      )
    }

    return (
      <div>
        <Segment.Group horizontal>
          <Segment>
            <label className={'title'}>Starting point</label>
            <PlacesSearch />
          </Segment>
          <Segment>
            <label className={'title'}>Trip duration</label>
            <Dropdown className={'padded'} placeholder='Choose one' fluid selection options={tripDurations} />
          </Segment>
          <Segment>
            <label className={'title'}>Recommendation type</label>
            <Dropdown className={'padded'} placeholder='Choose one' fluid selection options={recomendationTypes} />
          </Segment>
        </Segment.Group>
        <button className={'ui right floated primary button'} onClick={this.handleClick}>Find me a trip</button>
      </div>
    )
  }
}
