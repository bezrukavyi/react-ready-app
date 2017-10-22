import React from 'react'

import { Alert, Fields, Buttons } from 'components'
import { Link } from 'react-router-dom'
import * as path from 'constants/Path'

const UpdatePasswordForm = ({ handleSubmit, error, submitting }) =>
  <div className='form__auth'>
    <form onSubmit={handleSubmit}>
      <h2>Update password</h2>

      <Fields.Input className='black__theme' type='password' name='currentPassword' placeholder='current password' />
      <Fields.Input className='black__theme' type='password' name='password' placeholder='password' />
      <Fields.Input className='black__theme' type='password' name='passwordConfirmation' placeholder='password confirmation' />

      {error &&
        <Alert type='danger'>
          {error}
        </Alert>
      }

      <div className='form__submit'>
        <Buttons.Form className='black__theme' type='submit' loading={submitting} text='Update password' />
      </div>
    </form>
  </div>

export default UpdatePasswordForm
