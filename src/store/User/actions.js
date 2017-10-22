import { replace } from 'react-router-redux'

import { pick, expandPath, pickBy, isNil, isEmpty } from 'utils'
import * as Types from './types'
import Api from '../Api/actions'
import urlParams, { fetchUrlParam } from 'utils/urlParams'
import { SUCCESS } from '../Api/types'
import * as storage from 'storage'
import * as path from 'constants/Path'

const headersKeys = [
  'token',
  'client-id',
  'uid',
]

export const extractAccessHeaders = pick(headersKeys)

export const setAccessHeaders = (headers) => ({
  type: Types.USER_SET_ACCESS_HEADERS + SUCCESS,
  payload: headers,
})

export const setResetPasswordToken = () => ({
  type: Types.USER_SET_RESET_PASSWORD_TOKEN,
  payload: fetchUrlParam('reset_password_token', true),
})

export const checkAuthCredentials = () => {
  const urlHeaders = pickBy(urlParams(headersKeys, true), (value, key) => !isNil(value))
  if(!isEmpty(urlHeaders)) { storage.set('authData', urlHeaders) }
}

export const fetchResetPasswordToken = () => {
  const urlHeaders = pickBy(urlParams(headersKeys, true), (value, key) => !isNil(value))
  if(!isEmpty(urlHeaders)) { storage.set('authData', urlHeaders) }
}

export const signout = () => (dispatch) => {
  Promise.resolve(dispatch({type: Types.USER_SIGNOUT})).then(response => {
    storage.remove('authData')
    return dispatch(replace(path.ROOT))
  })
}

export const removeAccessHeaders = () => storage.remove('authData')

const auth = (dispatch, path, type, data) =>
  dispatch(Api.post(`${path}`, type, { data }))
  .then((response) => {
    const accessHeaders = extractAccessHeaders(response.headers)
    storage.set('authData', accessHeaders)
    return response
  })

export const signin = (data) => (dispatch) =>
  auth(dispatch, '/auth/sign_in', Types.USER_SET_ACCESS_HEADERS, data)

export const signup = (data) => (dispatch) =>
  auth(dispatch, '/auth', Types.USER_SET_ACCESS_HEADERS, data)

export const validateToken = () =>
  Api.get('auth/validate_token', Types.VALIDATE_TOKEN, {})

export const forgotPassword = (data) =>
  Api.post('auth/password', Types.FORGOT_PASSWORD, { data })

export const updatePassword = (data) =>
  Api.patch('auth/password', Types.UPDATE_PASSWORD, { data })
