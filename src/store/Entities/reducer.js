import * as utils from './utils'
import { SUCCESS } from '../Api/types'

const entities = (state = {}, { type, payload }) => {
  switch (type) {
    // case balance.BALANCES_LIST + SUCCESS:
    // case balance.BALANCE_GET + SUCCESS:
    // case balance.BALANCE_CREATE + SUCCESS:
    // case balance.BALANCE_UPDATE + SUCCESS: {
    //   return utils.complement(state, payload.data)
    // }
    // case balance.BALANCE_DESTROY + SUCCESS: {
    //   return utils.slice(state, payload.data)
    // }
    default:
      return state
  }
}

export default entities
