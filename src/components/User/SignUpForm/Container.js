import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import { history } from 'store'
import { signup } from 'store/User/actions'
import * as path from 'routes/path'
import SignUpForm from './Component'
import { formAdapter } from 'utils'

const mapStateToProps = (state, ownProps) => ({
  form: 'User.SignUpForm',
})

const mapDispatchToProps = {
  signup,
  onSuccess: () => replace(path.AUTHED)
}

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...stateProps,
  ...dispatchProps,
  ...ownProps,
  onSubmit: formAdapter(data => dispatchProps.signup(data).then(response => dispatchProps.onSuccess()))
})

const reduxSignUpForm = reduxForm({})(SignUpForm)

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(reduxSignUpForm)
