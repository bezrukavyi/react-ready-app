import React from 'react'

import { Alert, Fields, Buttons } from 'components'
import { Link } from 'react-router-dom'
import * as path from 'constants/Path'

const ForgotPasswordForm = ({ handleSubmit, error, submitting }) =>
  <div className='form__auth'>
    <form onSubmit={handleSubmit}>
      <h2>Forgot password</h2>

      <Fields.Input className='black__theme' type='email' name='email' placeholder='email' />

      {error &&
        <Alert type='danger'>
          {error}
        </Alert>
      }

      <div className='form__submit'>
        <Buttons.Form className='black__theme' type='submit' loading={submitting} text='Forgot password' />
      </div>
    </form>
  </div>

export default ForgotPasswordForm
