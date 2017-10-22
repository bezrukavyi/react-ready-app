import * as utils from './utils'
import { SUCCESS } from '../Api/types'

const entities = (state = {}, { type, payload }) => {
  switch (type) {
    // case MY_ENTITY_LIST + SUCCESS:
    // case MY_ENTITY_GET + SUCCESS:
    // case MY_ENTITY_CREATE + SUCCESS:
    // case MY_ENTITY_UPDATE + SUCCESS: {
    //   return utils.complement(state, payload.data)
    // }
    // case MY_ENTITY_DESTROY + SUCCESS: {
    //   return utils.slice(state, payload.data)
    // }
    default:
      return state
  }
}

export default entities
