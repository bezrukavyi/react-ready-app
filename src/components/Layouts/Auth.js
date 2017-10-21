import React from 'react'

import User from 'components/User'

const Auth = ({ children }) =>
  <div className='main-container'>
    <h1>Authed Layout</h1>
    <User.SignOutButton />
    {children}
  </div>

export default Auth
