import React from 'react'
import { Route as ReactRoute } from 'react-router'
import Helmet from 'react-helmet'

import * as Text from 'constants/Text'
import meta from './meta'

const Route = ({ path, ...rest }) => {
  const metaInfo = meta[path]

  return (
    <div>
      <Helmet {...metaInfo} />

      <ReactRoute path={path} {...rest} />
    </div>
  )
}

export default Route
