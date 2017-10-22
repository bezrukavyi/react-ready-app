import axios from 'axios'
import User from '../User'
import { camelCaseKeys, snakeCaseKeys, transform } from 'utils'
import { REQUEST, SUCCESS, FAILURE } from './types'

const request = (method, path, action, payload) => (dispatch, getState) => {
  dispatch({
    type: action + REQUEST,
    payload
  });

  const headers = User.selectors.accessHeaders(getState())
  const baseURL = process.env.REACT_APP_API_DOMAIN

  const config = {
    baseURL,
    method,
    url: path,
    data: snakeCaseKeys(payload.data),
    params: snakeCaseKeys(payload.params),
    headers
  }

  return axios.request(config)
    .then((response) => {
      dispatch({
        type: action + SUCCESS,
        payload: { ...response, data: camelCaseKeys(response.data.data || response.data) }
      });

      return response;
    })
    .catch((reject) => {
      dispatch({
        type: action + FAILURE,
        payload: { ...reject, data: camelCaseKeys(reject.response.data) }
      });

      throw reject;
    })
}

const types = ['post', 'get', 'delete', 'patch']

const actionate = (api, method) => {
  api[method] = (path, action, payload) => request(method, path, action, payload)
}

const api = transform(types, actionate, {})

export default api
