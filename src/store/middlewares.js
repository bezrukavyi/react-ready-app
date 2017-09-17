import { applyMiddleware, compose } from 'redux'
import { createLogger as createLoggerMiddleware } from 'redux-logger'
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'

const isDev = process.env.NODE_ENV === 'development'

const configureMiddlewares = (history) => {
  const routerMiddleware = createRouterMiddleware(history)

  const loggerMiddleware = createLoggerMiddleware({
    collapsed: true,
    timestamp: false,
    duration: true,
  })

  const devMiddlewares = isDev ?
  [loggerMiddleware] :
  []

  const middlewares = applyMiddleware(
    routerMiddleware,
    thunk,
    ...devMiddlewares
  )

  return compose(middlewares)
}

export default configureMiddlewares
