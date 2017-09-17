import { connect } from 'react-redux'
import { Github, Facebook, Chrome } from 'react-feather'

import OAuthButton from './Component'

const providersIcons = {
  'github': Github,
  'facebook': Facebook,
  'google_oauth2': Chrome,
}

const redirectToProvider = (provider) => {
  window.location.assign(`${process.env.REACT_APP_DOMAIN}/auth/${provider.toLowerCase()}`)
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ProviderIcon: providersIcons[ownProps.provider],
  toProvider: () => redirectToProvider(ownProps.provider)
})

export default connect(null, mapDispatchToProps)(OAuthButton)
