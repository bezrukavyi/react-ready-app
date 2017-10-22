import React from 'react'
import { isFunction } from 'lodash'
import { Route as ReactRoute } from 'react-router'
import Helmet from 'react-helmet'

import * as Text from 'constants/Text'
import Meta from 'constants/Meta'

const Route = ({ path, beforeAction, ...rest }) => {
  if (isFunction(beforeAction)) { beforeAction() }
  const metaInfo = Meta[path]

  return (
    <div>
      <Helmet {...metaInfo} />

      <ReactRoute path={path} {...rest} />
    </div>
  )
}

export default Route
