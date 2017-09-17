import { USER_SET_ACCESS_HEADERS, USER_SIGNOUT, VALIDATE_TOKEN } from './types'
import { SUCCESS } from '../Api/types'
import { createReducer, set } from 'utils'

export default createReducer({}, {
  [VALIDATE_TOKEN + SUCCESS]: (state, payload) => set('entity', payload.headers, state),
  [USER_SET_ACCESS_HEADERS + SUCCESS]: (state, payload) => set('accessHeaders', payload.headers, state),
  [USER_SIGNOUT]: (state, payload) => set('accessHeaders', null, state)
})
