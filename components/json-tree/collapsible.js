import React, {Component} from 'react'
import { JsonKey, JsonValue, JsonItemCollapsible } from '../styles/json-tree'
import Toggle from './toggle'

class Collapsible extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
    this.toggle = this.toggle.bind(this)
  }

  toggle () {
    this.setState({
      checked: !this.state.checked
    })
  }
  //  {/* <JsonToggle type='checkbox' checked={this.state.checked} onChange={this.toggle} /> */}
  render () {
    return (
      <JsonItemCollapsible>
        <Toggle checked={this.state.checked} onClick={this.toggle} onChange={this.toggle} />
        <JsonKey>{this.props.keyName}</JsonKey>
        <JsonValue type={this.props.type}>{this.props.type}</JsonValue>
        {this.state.checked && <div>
          {this.props.children}
        </div>}
      </JsonItemCollapsible>
    )
  }
}

export default Collapsible
