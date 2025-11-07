import {combineReducers} from 'redux'
import {iceCreamReducer} from '../redux/iceCream/iceCream_Reducer'
import cakeReducer from '../redux/cake/cakeReducer'
import { userReducer } from './user/userReducer'

export const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    users: userReducer
})
