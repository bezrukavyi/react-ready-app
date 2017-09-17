import { SubmissionError } from 'redux-form';
import { curry, cond, fromPairs, pipe, T, identity, props, pick, reduce, uniq, always, chain, toPairs } from 'ramda';
import { join, filter, keys, max, isArray, isObject, transform, snakeCase, camelCase, map as lodashMap, startCase, capitalize, isNil, lowerCase, isString, flatten, each, isEmpty, pickBy } from 'lodash'
import dotProp, { get } from 'dot-prop-immutable';
import { replace } from 'react-router-redux'

import * as Path from 'routes/path'
import { store } from 'store'

export const set = curry((path, value, object) =>
  dotProp.set(object, path, value))

export const update = set

export const errorRedirect = () => store.dispatch(replace(Path.ERROR_500))

const errorsToString = cond([
  [isNil, identity],
  [isArray, identity],
  [T, pipe(toPairs, chain(([k, vs]) => map((v) => `${capitalize(lowerCase(k))} ${v}`, vs)))]
])

const fetchError = (errorReject) =>
  get(errorReject, 'response.data.errors')
  || errorsToString(get(errorReject, 'response.data.errors'))
  || get(errorReject, 'response.statusText')
  || get(errorReject, 'error.message')

export const formAdapter = (f) => (...args) =>
  f(...args).catch((reject) => {
    const errorReject = camelCaseKeys(reject)
    const adaptErrors = (errors) => transform(errors, (result, value, key) => result[key] = join(value, ', '), {})

    let error = fetchError(errorReject)
    if (!error) { return errorRedirect() }

    error = isArray(error) || isString(error) ? { _error: error } : adaptErrors(error)

    throw new SubmissionError(error)
  })


export const map = curry((f, x) => lodashMap(x, f));

export const createReducer = (iniitialState, defs) => (state = iniitialState, { type, payload }) => {
  const f = defs[type];

  if (f) {
    return f(state, payload) ;
  } else {
    return state;
  }
}

export const expandPath = (path) => {
  const parser = document.createElement('a')
  parser.href = window.location.toString()
  parser.pathname = path
  return parser.href.toString()
}

export const deepTransformKeys = curry((f, value) => cond([
  [isArray, map(deepTransformKeys(f))],
  [isObject, pipe(map((value, key) => [f(key), deepTransformKeys(f, value)]), fromPairs)],
  [T, identity],
])(value))

export const camelCaseKeys = (object) => deepTransformKeys(camelCase, object)
export const snakeCaseKeys = (object) => deepTransformKeys(snakeCase, object)

export { cond, isObject, snakeCase, pipe, fromPairs, isArray, T, identity, props, pick, reduce, uniq, always, camelCase, chain, transform, pickBy, isEmpty, isNil, get };
