import React from 'react'
import PropTypes from 'prop-types'
import { map } from 'utils'
import { Field } from 'redux-form'

const Select = ({ input, label, placeholder, options, type }) => (
  <div className='form-group'>
    <label>{label}</label>

    <select
      {...input}
      type={type}
      className='form-control'
      placeholder={placeholder}
    >
      {map(({ text, value }) =>
        <option key={value} value={value}>{text}</option>
      , options)}
    </select>
  </div>
)

Select.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.node.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired).isRequired,
}

const FieldWrapper = (props) =>
  <Field {...props} component={Select} />

export default FieldWrapper
