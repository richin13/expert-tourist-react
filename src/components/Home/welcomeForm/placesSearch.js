import React, { Component } from 'react'
import PlacesAutocomplete from 'react-places-autocomplete'

export class PlacesSearch extends Component {

  constructor(props) {
    super(props)
    this.state = { address: 'Paraíso, Cartago, Costa Rica' }
    this.onChange = (address) => this.setState({ address })
  }

  render() {
    const cssClasses = {
      root: 'form-group',
      input: 'PlacesSearch__search-input',
      autocompleteContainer: 'PlacesSearch__autocomplete-container',
    }

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="PlacesSearch__suggestion-item">
        <i className='marker icon PlacesSearch__suggestion-icon'/>
        <strong>{formattedSuggestion.mainText}</strong>{' '}
        <small className="text-muted">{formattedSuggestion.secondaryText}</small>
      </div>)

    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      name: 'PlacesSearch__input',
    }

    const options = {
      componentRestrictions: { country: 'CR' },
      types: ['(cities)']
    }

    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete
          autocompleteItem={AutocompleteItem}
          classNames={cssClasses}
          inputProps={inputProps}
          options={options}
        />
      </form>
    )
  }
}
