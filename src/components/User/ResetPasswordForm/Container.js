import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'
import lifecycleConnect from 'lifecycle-connector'

import { history } from 'store'
import User from 'store/User'
import * as path from 'routes/path'
import ResetPasswordForm from './Component'
import { formAdapter } from 'utils'

const componentDidMount = () => (dispatch) =>
  !User.selectors.resetPasswordToken() && dispatch(replace(path.ROOT))

const mapStateToProps = (state, ownProps) => ({
  initialValues: {
    resetPasswordToken: User.selectors.resetPasswordToken(),
  },
  form: 'User.ResetPasswordForm',
})

const mapDispatchToProps = {
  componentDidMount,
  updatePassword: User.actions.updatePassword,
  onSuccess: () => replace(path.ROOT),
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter(data => dispatchProps.updatePassword(data).then(response => dispatchProps.onSuccess()))
})

const reduxResetPasswordForm = reduxForm({})(ResetPasswordForm)
export default lifecycleConnect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxResetPasswordForm)
