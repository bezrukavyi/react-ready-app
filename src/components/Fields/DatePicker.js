import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'
import 'react-datepicker/dist/react-datepicker.css'
import { Field } from 'redux-form'

const DatePickerWrap = ({ input, meta, className, placeholder, type }) => (
  <div className='form-group'>
    <DatePicker
      {...input}
      dateForm="MM/DD/YYYY"
      selected={input.value ? moment(input.value) : null}
    />

    { meta.error && <span>{ meta.error }</span> }
  </div>
)

const DatePickerField = (props) => (
  <Field {...props} component={DatePickerWrap} />
)

export default DatePickerField
