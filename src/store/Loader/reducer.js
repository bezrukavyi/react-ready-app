import * as User from '../User/types'
import * as Api from '../Api/types'
import * as utils from './utils'

const entitiesKeys = {
  [User.USER_SET_ACCESS_HEADERS]: 'user',
  [User.USER_SIGNOUT]: 'user',
  [User.VALIDATE_TOKEN]: 'user',
}

const loader = (state = {}, { type, payload }) => {
  const name = entitiesKeys[type]
  if (!name) { return state }

  if (Api.isFetchRequest(type)) {
    utils.set(state, name, payload, true)
  }

  if (Api.isFetchSuccess(type) || Api.isFetchFailure(type)) {
    utils.set(state, name, payload, false)
  }

  return state
}

export default loader
