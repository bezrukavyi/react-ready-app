import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import { signin } from 'store/User/actions'
import * as path from 'constants/Path'
import SigninForm from './Component'
import { formAdapter } from 'utils'

const mapStateToProps = (state, ownProps) => ({
  form: 'User.SigninForm',
})

const mapDispatchToProps = {
  signin,
  onSuccess: () => replace(path.AUTHED)
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter(data => dispatchProps.signin(data).then(response => dispatchProps.onSuccess()))
})

const reduxSignInForm = reduxForm({})(SigninForm)

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxSignInForm)
