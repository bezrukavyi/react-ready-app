import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import { history } from 'store'
import User from 'store/User'
import * as path from 'routes/path'
import ForgotPasswordForm from './Component'
import { formAdapter } from 'utils'

const mapStateToProps = (state, ownProps) => ({
  initialValues: { redirectUrl: process.env.REACT_APP_REDIRECT_URL },
  form: 'User.ForgotPasswordForm',
})

const mapDispatchToProps = {
  forgotPassword: User.actions.forgotPassword,
  onSuccess: () => replace(path.ROOT)
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter(data => dispatchProps.forgotPassword(data).then(response => dispatchProps.onSuccess()))
})

const reduxForgotPasswordForm = reduxForm({})(ForgotPasswordForm)
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxForgotPasswordForm)
