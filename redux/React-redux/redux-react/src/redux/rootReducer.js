import {combineReducers} from 'redux'
import {iceCreamReducer} from '../redux/iceCream/iceCream_Reducer'
import cakeReducer from '../redux/cake/cakeReducer'

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
