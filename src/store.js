import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const hiddenActions = ['EXAMPLE_HIDDEN_ACTION']

const logger = createLogger({
  predicate: (getState, action) => !hiddenActions.includes(action.type),
  collapsed: (getState, action, logEntry) => !logEntry.error
})

let store = null
const middleware = [logger]

if (process.env.NODE_ENV !== 'production') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  store = createStore(reducers, composeEnhancers(applyMiddleware(...middleware)))
} else {
  store = createStore(reducers, applyMiddleware(...middleware))
}

export default store
