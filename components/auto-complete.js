import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import { AcInput, Suggestions, SuggestionItem, NoResults } from './styles/auto-complete'

class Autocomplete extends Component {
  constructor (props) {
    super(props)

    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onKeyDown = this.onKeyDown.bind(this)
    this.onClick = this.onClick.bind(this)
    this.onFocus = this.onFocus.bind(this)
  }
  onChange (e) {
    if (!e.currentTarget.value) return
    const { suggestions } = this.props
    const userInput = e.currentTarget.value

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    )

    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: e.currentTarget.value
    })
  }

  onFocus () {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: this.props.suggestions,
      showSuggestions: true
    })
  }

  onClick (e) {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: e.currentTarget.innerText
    })
    this.props.onChanged(e.currentTarget.innerText)
  }

  onKeyDown (e) {
    const { activeSuggestion, filteredSuggestions } = this.state
    // User pressed the enter key, update the input and close the
    // suggestions
    if (e.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      })
      this.props.onChanged(filteredSuggestions[activeSuggestion])
    } else if (e.keyCode === 38) { // User pressed the up arrow, decrement the index
      if (activeSuggestion === 0) return
      this.setState({ activeSuggestion: activeSuggestion - 1 })
    } else if (e.keyCode === 40) { // User pressed the down arrow, increment the index
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 })
    }
  }

  render () {
    let suggestionsListComponent

    if (this.state.showSuggestions) {
      if (this.state.filteredSuggestions.length) {
        suggestionsListComponent = (
          <Suggestions width={this.props.width}>
            {this.state.filteredSuggestions.map((suggestion, index) => {
              return (
                <SuggestionItem index={index} selectedIndex={this.state.activeSuggestion}
                  key={suggestion}
                  onClick={this.onClick}
                >
                  {suggestion}
                </SuggestionItem>
              )
            })}
          </Suggestions>
        )
      } else {
        suggestionsListComponent = (
          <NoResults>
            <em>No suggestions</em>
          </NoResults>
        )
      }
    }

    return (
      <Fragment>
        <AcInput
          width={this.props.width}
          placeholder={this.props.placeholder}
          type='text'
          onFocus={this.onFocus}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          value={this.state.userInput}
        />
        {suggestionsListComponent}
      </Fragment>
    )
  }
}
Autocomplete.prototypes = {
  suggestions: PropTypes.instanceOf(Array),
  placeholder: PropTypes.string,
  width: PropTypes.string,
  onChanged: PropTypes.func
}
Autocomplete.defaultProps = {
  suggestions: [],
  placeholder: '',
  onChanged: () => {}
}

export default Autocomplete
