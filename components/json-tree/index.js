import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { JsonWrapper } from '../styles/json-tree'
import Item from './item'
import Collapsible from './collapsible'

class JsonTree extends Component {
  constructor (props) {
    super(props)
    this.state = {

    }
  }
  createItem (key, value, type) {
    return <Item keyName={key} value={value} type={type} />
  }

  createCollapsibleItem (key, value, type, children) {
    return <Collapsible keyName={key} value={value} type={type}> {children} </Collapsible>
  }

  handleChildren (key, value, type) {
    const nodes = []

    for (let item in value) {
      let key = item
      let val = value[item]

      nodes.push(this.handleItem(key, val))
    }
    return this.createCollapsibleItem(key, value, type, nodes)
  }

  handleItem (key, value) {
    var type = typeof value

    if (typeof value === 'object') {
      return this.handleChildren(key, value, type)
    }

    return this.createItem(key, value, type)
  }

  buildTree (obj) {
    const nodes = []
    for (let item in obj) {
      let key = item
      let value = obj[item]

      nodes.push(this.handleItem(key, value))
    }
    return nodes
  }

  render () {
    return (
      <JsonWrapper>
        {this.buildTree(this.props.json)}
      </JsonWrapper>
    )
  }
}

JsonTree.propTypes = {
  json: PropTypes.object
}

JsonTree.defaultProps = {
  json: {
    'User': {
      'Personal Info': {
        'Name': 'Eddy',
        'Age': 3,
        'college': {
          id: '123',
          'division': {
            id: '4567'
          }
        }
      },
      'Active': true,
      'Messages': [
        'Message 1',
        'Message 2',
        'Message 3'
      ]
    },
    'Total': 1
  }
}

export default JsonTree
