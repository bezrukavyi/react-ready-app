import React from 'react'
import classnames from 'classnames'

import Buttons from 'components/Buttons'

const SignOutButton = ({ signout }) =>
  <Buttons.Simple onClick={signout} className='signout-button'>
    <span>Sign out</span>
  </Buttons.Simple>

export default SignOutButton
