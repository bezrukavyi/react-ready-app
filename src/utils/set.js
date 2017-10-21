import dotProp from 'dot-prop-immutable';
import { curry } from 'ramda'

const set = curry((path, value, object) => dotProp.set(object, path, value))

export default set
