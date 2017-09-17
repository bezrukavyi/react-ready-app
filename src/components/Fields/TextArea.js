import React from 'react'

import { Field } from 'redux-form'

const TextArea = ({ input, meta, className, placeholder, type }) => (
  <div className='form-group'>
    <textarea
      {...input}
      className={className || 'form-control input__form'}
      type={type}
      placeholder={placeholder}
    ></textarea>

    { meta.error && <span>{ meta.error }</span> }
  </div>
)

const TextAreaWrapper = (props) => (
  <Field {...props} component={TextArea} />
)

export default TextAreaWrapper
