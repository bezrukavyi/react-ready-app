import { replace } from 'react-router-redux'

import Api from '../Api/actions'
import { pick, expandPath, pickBy, isNil, isEmpty } from 'utils'
import urlParams from 'utils/urlParams'
import { USER_SET_ACCESS_HEADERS, USER_SIGNOUT, VALIDATE_TOKEN } from './types'
import * as storage from 'storage'
import * as path from 'routes/path'
import { SUCCESS } from '../Api/types'

const headersKeys = [
  'access-token',
  'client',
  'uid',
]

const extractAccessHeaders = pick(headersKeys)

export const setAccessHeaders = (headers) => {
  return {
    type: USER_SET_ACCESS_HEADERS + SUCCESS,
    payload: headers,
  }
}

export const removeAccessHeaders = () => storage.remove('authData')

export const checkAuthCredentials = () => {
  const urlHeaders = pickBy(urlParams(headersKeys, true), (value, key) => !isNil(value))
  if(!isEmpty(urlHeaders)) { storage.set('authData', urlHeaders) }
}

const auth = (dispatch, path, type, data) =>
  dispatch(Api.post(`${path}`, type, { data }))
  .then((response) => {
    const accessHeaders = extractAccessHeaders(response.headers)
    storage.set('authData', accessHeaders)
    return response
  })

export const signin = (data) => (dispatch) =>
  auth(dispatch, '/auth/sign_in', USER_SET_ACCESS_HEADERS, data)

export const signup = (data) => (dispatch) =>
  auth(dispatch, '/auth', USER_SET_ACCESS_HEADERS, data)

export const validateToken = () => {
  return Api.get('auth/validate_token', VALIDATE_TOKEN, {})
}
export const signout = () => (dispatch) => {
  Promise.resolve(dispatch({type: USER_SIGNOUT})).then(response => {
    storage.remove('authData')
    return dispatch(replace(path.AUTHED))
  })
}
