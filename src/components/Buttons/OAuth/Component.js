import React from 'react'
import classnames from 'classnames'

import SimpleButton from '../Simple'

const OAuthButton = ({ className, toProvider, ProviderIcon }) =>
  <SimpleButton onClick={toProvider} className={classnames(className, "oauth-button")}>
    <span>{<ProviderIcon />}</span>
  </SimpleButton>

export default OAuthButton
