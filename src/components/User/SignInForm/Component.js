import React from 'react'

import { Alert, Fields, Buttons } from 'components'
import { Link } from 'react-router-dom'
import * as path from 'routes/path'

const SignInForm = ({ handleSubmit, error, submitting }) =>
  <div className='form__auth'>
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>

      <Fields.Input className='black__theme' type='email' name='email' placeholder='email' />
      <Fields.Input className='black__theme' type='password' name='password' placeholder='password' />

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

        <Buttons.Simple className='btn-link btn-hint' as={Link} to={path.SIGN_UP}>
          sign up
        </Buttons.Simple>

        <span className='form__hint'></span>

        <Buttons.Simple className='btn-link btn-hint' as={Link} to={path.FORGOT_PASSWORD}>
          forgot password?
        </Buttons.Simple>
      </div>
    </form>

    <div className='oauth-providers'>
      <Buttons.OAuth provider='github' />
      <Buttons.OAuth provider='facebook' />
      <Buttons.OAuth provider='google_oauth2' />
    </div>
  </div>

export default SignInForm
