import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import { replace } from 'react-router-redux'

import { history } from 'store'
import { signup } from 'store/User/actions'
import * as path from 'routes/path'
import SignUpForm from './Component'
import { formAdapter } from 'utils'

const mapDispatchToProps = {
  signup,
  onSuccess: () => replace(path.AUTHED)
}

const mergeProps = (_, dispatchProps, ownProps) => ({
  ...ownProps,
  onSubmit: formAdapter(data => dispatchProps.signup(data).then(response => dispatchProps.onSuccess()))
})

const reduxSignUpForm = reduxForm({ form: 'User.SignUpForm' })(SignUpForm)

export default connect(null, mapDispatchToProps, mergeProps)(reduxSignUpForm)
