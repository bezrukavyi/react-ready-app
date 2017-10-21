import { map as lodashMap } from 'lodash'
import { curry } from 'ramda'

const map = curry((f, x) => lodashMap(x, f))

export default map
