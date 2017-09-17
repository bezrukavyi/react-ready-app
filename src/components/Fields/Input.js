import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
import { Field } from 'redux-form'

const Input = ({ input, className, placeholder, type, label, meta }) => (
  <div className='form-group'>
    <input
      {...input}
      type={type}
      className={classnames('form-control input__form', className, {'error__theme' : meta.error})}
      placeholder={placeholder}
    />
    { label ? <label>{ label }</label> : '' }

    <span className={classnames('input__message', { 'input__message--show input__message--error': meta.error })}>
      { meta.error }
    </span>
  </div>
)

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
}

const InputWrapper = (props) => (
  <Field {...props} component={Input} />
)

export default InputWrapper
