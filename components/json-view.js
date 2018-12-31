import React from 'react'
import { JsonView, TextArea } from './styles/json-view'

const debounce = (fn, time) => {
  let timeoutId = false
  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    timeoutId = setTimeout(() => {
      timeoutId = null
      fn(...args)
    }, time)
  }
}

export default class JsonText extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {
      show: false,
      tvalue: props.defaultText || ''
    }
    this.toggle = this.toggle.bind(this)
    this.onTextChange = this.onTextChange.bind(this)
    this.debounced = debounce(value => {
      this.onTextChange(value)
    }, 300)
  }

  toggle () {
    this.setState({
      show: !this.state.show
    })
  }

  async onTextChange (v) {
    let obj
    try {
      obj = JSON.parse(v.target.value)
    } catch (err) {
      console.log(err)
    }
    if (obj) {
      await this.setState({
        content: obj,
        show: true,
        tvalue: JSON.stringify(obj, null, 4)
      }, () => { console.log(this.state.tvalue) })
    } else {
      await this.setState({
        tvalue: v.target.value
      })
    }
  }

  render () {
    return (
      <JsonView>
        <TextArea onChange={this.onTextChange} value={this.state.tvalue} rows='35' cols='46' />
      </JsonView>
    )
  }
}
