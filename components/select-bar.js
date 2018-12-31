import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { SelectContainer, SelectItem } from './styles/select-bar'

class SelectBar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedIndex: 0
    }
    this.onSelectionChange = this.onSelectionChange.bind(this)
  }
  onSelectionChange (index) {
    if (!this.props.items[index]) return

    this.setState({
      selectedIndex: index
    })
    this.props.onSelectionChanged(this.props.items[index].value)
  }

  render () {
    return (
      <SelectContainer minWidth={this.props.minWidth}>
        {this.props.items.map((item, index) => {
          return <SelectItem onClick={() => { this.onSelectionChange(index) }} selected={index === this.state.selectedIndex}>{item.label}</SelectItem>
        })}
      </SelectContainer>
    )
  }
}
SelectBar.prototypes = {
  items: PropTypes.instanceOf(Array),
  placeholder: PropTypes.string,
  minWidth: PropTypes.string,
  onChanged: PropTypes.func
}
SelectBar.defaultProps = {
  items: [],
  onSelectionChanged: () => {}
}

export default SelectBar
