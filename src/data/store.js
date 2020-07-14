import dataInfo from './dataInfo/reducer'

import { createStore, compose, combineReducers } from 'redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
    combineReducers({
        dataInfo
    }), 
    composeEnhancers()
)
export default store;