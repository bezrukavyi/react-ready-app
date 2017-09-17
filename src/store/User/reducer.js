import { USER_SET_ACCESS_HEADERS, USER_SIGNOUT, VALIDATE_TOKEN, REMOVE_HEADERS } from './types'
import { SUCCESS, FAILURE } from '../Api/types'
import { createReducer, set } from 'utils'
import { extractAccessHeaders } from './actions'

export default createReducer({}, {
  [VALIDATE_TOKEN + SUCCESS]: (state, payload) => set('entity', payload.data, state),
  [VALIDATE_TOKEN + FAILURE]: (state, payload) => set('accessHeaders', null, state),
  [USER_SET_ACCESS_HEADERS + SUCCESS]: (state, payload) => set('accessHeaders', extractAccessHeaders(payload.headers), state),
  [USER_SIGNOUT]: (state, payload) => set('accessHeaders', null, state)
})
