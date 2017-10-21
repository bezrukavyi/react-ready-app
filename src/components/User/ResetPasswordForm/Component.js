import React from 'react'

import { Alert, Fields, Buttons } from 'components'
import { Link } from 'react-router-dom'
import * as path from 'routes/path'

const ResetPasswordForm = ({ handleSubmit, error, submitting }) =>
  <div className='form__auth'>
    <form onSubmit={handleSubmit}>
      <h2>Reset password</h2>

      <Fields.Input className='black__theme' type='password' name='password' />
      <Fields.Input className='black__theme' type='password' name='passwordConfirmation' />

      {error &&
        <Alert type='danger'>
          {error}
        </Alert>
      }

      <div className='form__submit'>
        <Buttons.Form className='black__theme' type='submit' loading={submitting} text='Reset password' />
      </div>
    </form>
  </div>

export default ResetPasswordForm
