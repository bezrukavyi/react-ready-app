import React from 'react'
import { replace } from 'react-router-redux'
import { isFunction } from 'lodash'

import Route from './Route'
import { store } from 'store'
import User from 'store/User'
import * as appPath from './path'
import { Preloader } from 'components'
import Layouts from 'components/Layouts'

const AuthRoute = ({ layout, match, path, component: Component, successCallback, ...rest }) => {
  const user = User.selectors.entity()

  if (!user) {
    store.dispatch(User.actions.validateToken())
    .then(response => isFunction(successCallback) ? store.dispatch(successCallback(response)) : response)
    .then(response => store.dispatch(replace(match)))
    .catch(reject => store.dispatch(replace(appPath.ROOT)))
  }

  return (
    <Route path={path} {...rest} render={props => (
      user
      ? <Layouts.Auth><Component { ...props} /></Layouts.Auth>
      : <Preloader loading={true} />
    )}/>
  )
}

export default AuthRoute
