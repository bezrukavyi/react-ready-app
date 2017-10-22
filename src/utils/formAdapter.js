import { SubmissionError } from 'redux-form';
import { replace } from 'react-router-redux'
import dotProp, { get } from 'dot-prop-immutable';
import { cond, pipe, identity, chain, T, toPairs, capitalize, lowerCase } from 'ramda'
import { isArray, transform, isNil, isString, join } from 'lodash'


import * as Path from 'constants/Path'
import { store } from 'store'
import map from 'utils/map'
import { camelCaseKeys } from 'utils/deepTransformKeys'

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


const formAdapter = (f) => (...args) =>
  f(...args).catch((reject) => {
    const errorReject = camelCaseKeys(reject)
    const adaptErrors = (errors) => transform(errors, (result, value, key) => result[key] = join(value, ', '), {})

    let error = fetchError(errorReject)
    if (!error) { return errorRedirect() }

    error = isArray(error) || isString(error) ? { _error: error } : adaptErrors(error)

    throw new SubmissionError(error)
  })


export default formAdapter
