import {createStore,applyMiddleware} from 'redux'
// import cakeReducer from  './cakeReducer'
import {rootReducer} from '../redux/rootReducer.js'
import {createLogger} from 'redux-logger'

// dev tool extension
import {composeWithDevTools} from '@redux-devtools/extension'

const logger = createLogger()

export const cakeStore = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))
