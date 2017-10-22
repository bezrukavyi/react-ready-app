import { connect } from 'react-redux'
import * as Feather from 'react-feather'

import OAuthButton from './Component'

const providersIcons = {
  'github': Feather.Github,
  'facebook': Feather.Facebook,
  'google_oauth2': Feather.Chrome,
}

const redirectToProvider = (provider) => {
  window.location.assign(`${process.env.REACT_APP_API_DOMAIN}/auth/${provider.toLowerCase()}`)
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  ProviderIcon: providersIcons[ownProps.provider],
  toProvider: () => redirectToProvider(ownProps.provider)
})

export default connect(null, mapDispatchToProps)(OAuthButton)
