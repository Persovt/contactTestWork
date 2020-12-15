import {
    combineRuducer
} from './reducer'
import {
    createStore,
    applyMiddleware
} from 'redux'

import logger from 'redux-logger'

let store = createStore(combineRuducer, applyMiddleware(logger))

export default store