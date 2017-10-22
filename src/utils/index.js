import { cond, pipe, fromPairs, T, identity, props, pick, reduce, uniq, always, chain } from 'ramda'
import { isObject, isArray, transform, pickBy, isEmpty, isNil } from 'lodash'

import formAdapter, { errorRedirect } from 'utils/formAdapter'
import map from 'utils/map'
import set from 'utils/set'
import fileName from 'utils/fileName'
import deepTransform, { camelCaseKeys, snakeCaseKeys } from 'utils/deepTransformKeys'
import * as storage from 'utils/storage'

const createReducer = (initialState, defs) => (state = initialState, { type, payload }) => {
  const defsFunction = defs[type]
  if (defsFunction) {
    return defsFunction(state, payload)
  } else {
    return state
  }
}

export {
  createReducer,
  cond,
  isObject,
  pipe,
  fromPairs,
  isArray,
  T,
  identity,
  props,
  pick,
  reduce,
  uniq,
  always,
  chain,
  transform,
  pickBy,
  isEmpty,
  isNil,
  formAdapter,
  errorRedirect,
  map,
  deepTransform,
  camelCaseKeys,
  snakeCaseKeys,
  set,
  storage,
  fileName,
}
