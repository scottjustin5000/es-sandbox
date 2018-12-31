import PropTypes from 'prop-types'
import React from 'react'
import Toast from './item'

import { ToastContainer } from '../styles/toast'

const Toasts = (props) => {
  const { removeToast } = props
  return (
    <ToastContainer>
      {props.toasts.map(toast => {
        const { id } = toast
        return (
          <Toast {...toast} key={id} onDismissClick={() => removeToast(id)} />
        )
      })}
    </ToastContainer>
  )
}
Toasts.propTypes = {
  removeToast: PropTypes.func.isRequired,
  toasts: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Toasts
