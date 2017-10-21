import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import { history } from 'store'
import User from 'store/User'
import * as path from 'routes/path'
import UpdatePasswordForm from './Component'
import { formAdapter } from 'utils'

const mapStateToProps = (state, ownProps) => ({
  form: 'User.UpdatePasswordForm',
})

const mapDispatchToProps = {
  updatePassword: User.actions.updatePassword,
  onSuccess: () => replace(path.ROOT),
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter(data => dispatchProps.updatePassword(data).then(response => dispatchProps.onSuccess()))
})

const reduxUpdatePasswordForm = reduxForm({})(UpdatePasswordForm)
export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxUpdatePasswordForm)
