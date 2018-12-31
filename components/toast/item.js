import PropTypes from 'prop-types'
import React, { Component } from 'react'

import { ToastItem, P, Dismiss } from '../styles/toast'

class Toast extends Component {
  constructor (props) {
    super(props)
    if (this.props.autoDismiss) {
      setTimeout(() => {
        props.onDismissClick()
      }, 7000)
    }
  }
  render () {
    return (
      <ToastItem>
        <P>
          {this.props.text}
        </P>
        <Dismiss onClick={this.props.onDismissClick}>
          x
        </Dismiss>
      </ToastItem>
    )
  }

  shouldComponentUpdate () {
    return false
  }
}

Toast.propTypes = {
  color: PropTypes.string.isRequired,
  autoDismiss: PropTypes.bool,
  onDismissClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Toast
