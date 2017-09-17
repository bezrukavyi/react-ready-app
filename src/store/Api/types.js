export const REQUEST = '_REQUEST'
export const FAILURE = '_FAILURE'
export const SUCCESS = '_SUCCESS'

export const isFetchRequest = (type) => /_FETCH_REQUEST$/.test(type)
export const isFetchSuccess = (type) => /_FETCH_SUCCESS$/.test(type)
export const isFetchFailure = (type) => /_FETCH_FAILURE$/.test(type)
