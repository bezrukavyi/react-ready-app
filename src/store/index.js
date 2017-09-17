import { createStore } from 'redux'
import createHistory from 'history/createBrowserHistory'

import configureMiddlewares from './middlewares'
import reducer from './reducers'

const configureStore = (history) => {
  const middlewares = configureMiddlewares(history)
  const store = createStore(reducer, middlewares)

  return store
}

export const history = createHistory()
export const store = configureStore(history)
