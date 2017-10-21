import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import { signout } from 'store/User/actions'
import * as path from 'routes/path'
import Component from './Component'
import { formAdapter } from 'utils'

const mapDispatchToProps = {
  signout,
  onSuccess: () => replace(path.ROOT)
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter(data => dispatchProps.signout().then(response => dispatchProps.onSuccess()))
})

export default connect(null, mapDispatchToProps, mergeProps)(Component)
