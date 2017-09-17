import React from 'react'

import { Alert, Fields, Buttons } from 'components'
import { Link } from 'react-router-dom'
import * as path from 'routes/path'

const SignUpForm = ({ handleSubmit, error, submitting }) =>
  <div className='form__auth'>
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>

      <Fields.Input className='black__theme' type='email' name='email' placeholder='email' />
      <Fields.Input className='black__theme' type='password' name='password' placeholder='password' />
      <Fields.Input className='black__theme' type='password' name='passwordConfirmation' placeholder='password confirmation' />

      {error &&
        <Alert type='danger'>
          {error}
        </Alert>
      }

      <div className='form__submit'>
        <Buttons.Form className='black__theme' type='submit' loading={submitting} text='Login' />

        <span className='form__hint'>
          or
        </span>

        <Buttons.Simple className='btn-link btn-hint' as={Link} to={path.ROOT}>
          sign in
        </Buttons.Simple>
      </div>
    </form>

    <div className='oauth-providers'>
      <Buttons.OAuth provider='github' />
      <Buttons.OAuth provider='facebook' />
      <Buttons.OAuth provider='google_oauth2' />
    </div>
  </div>

export default SignUpForm
