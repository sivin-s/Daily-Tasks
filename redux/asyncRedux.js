const redux = require('redux')
const axios = require('axios')
const { thunk } = require('redux-thunk')
const logger = require('redux-logger').createLogger()

const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware

// initial state
const initial_state = {
    isLoading: true,
    users:[],
    error:''
}

// const actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE'

//  action creatures
const fetch_users_request = ()=>{
    return{
        type: FETCH_USERS_REQUEST
    }
}

const fetch_users_success = (users)=>{
    return{
        type: FETCH_USERS_SUCCESS, // PREDICTABLE
        payload: users
    }
}

const fetch_users_failure = (error)=>{
  return{
    type: FETCH_USERS_FAILURE,
    payload: error
  }
}

// reducer
const reducer = (state=initial_state, action)=>{
    switch(action.type){
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                isLoading: false,
                users:[],
                error: action.payload
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                users: action.payload,
                error:''
            }
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}

const fetcher = ()=>{
    return async function(dispatch){
      dispatch(fetch_users_request())
      await axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{
       // The API returns an array of user objects. Let's dispatch them to the store.
       const users = res.data;
       dispatch(fetch_users_success(users.map((user)=> user.id)))
      }).catch((err)=>{
        dispatch(fetch_users_failure(err.message))
      })
    }
}


const store = createStore(reducer, applyMiddleware(thunk, logger))
store.subscribe(()=>  console.log(store.getState()))
store.dispatch(fetcher())