const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore
const combineReducers = redux.combineReducers
const logger= reduxLogger.createLogger()

const applicationMiddleware= redux.applyMiddleware

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM';

function buy_cake(){ // factory fn  (reusability action)
    // actionCreater
   return{ // return action
     type: BUY_CAKE,
     info: 'first redux action'
   } 
}

function buy_icecream(){
    return {
        type: BUY_ICECREAM,
        info: 'second redux action'
    }
}

const initialCakeState ={
    numOfCake:10
}

const initialIceCreamState={
    numOfIceCream: 20
}



function cakeReducer (prevState=initialCakeState, action){
    switch(action.type){
        case BUY_CAKE:
            return{
                ...prevState,
                numOfCake: prevState.numOfCake -1
            }
        default:
          return  prevState
    }
}

function iceCreamReducer(prevState=initialIceCreamState,action){
    switch(action.type){
        case BUY_ICECREAM:
            return{
                ...prevState,
                numOfIceCream: prevState.numOfIceCream -1
            }
        default:
            return prevState
    }
}


const reducers = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

const store = createStore(reducers,applicationMiddleware(logger))
// const unsubscribe = store.subscribe(()=> console.log('update state', store.getState())) // monitor any changes in state.
const unsubscribe = store.subscribe(()=>{}) // monitor any changes in state.
// console.log('initial state', store.getState().numOfCake)
store.dispatch(buy_cake())
store.dispatch(buy_cake())
store.dispatch(buy_icecream())
store.dispatch(buy_icecream())
unsubscribe() // removing subscribe event handler
console.log('.................')


