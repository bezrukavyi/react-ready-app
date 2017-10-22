import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
import { Field } from 'redux-form'
import { isFunction, isEmpty } from 'lodash'
import { fileName } from 'utils'
import Dropzone from 'react-dropzone';
import { get } from 'utils'

const FileInput = ({ input, className, placeholder, label, meta, onChange }) => (
  <div className='form-group file-input__wrap'>
    <Dropzone
      className={classnames('file-input__field', className)}
      onDrop={(e) => input.onChange(e)}>
    </Dropzone>

    { isEmpty(input.value)
      ? <span className='file-input__placeholder'>{ placeholder }</span>
      : <span className='file-input__placeholder'>{ fileName(input.value) }</span>
    }

    <span className={classnames('input__message', { 'input__message--show input__message--error': meta.error })}>
      { meta.error }
    </span>
  </div>
)

const FileInputWrapper = (props) => (
  <Field {...props} component={FileInput} />
)

export default FileInputWrapper
