import {FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS} from './userActionType.js'

export const fetch_user_request = ()=>{
    return{
        type: FETCH_USER_REQUEST
    }
}

export const fetch_user_success = (users)=>{
    return{
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}

export const fetch_user_failure = (err)=>{
    return{
        type: FETCH_USER_FAILURE,
        payload: err
    }
}

export const fetcher = ()=>{
    console.log('called fetch...')
   return async function(dispatch){
      dispatch(fetch_user_request())
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=> res.json())
       .then((users)=>{
        dispatch(fetch_user_success(users))
      })
      .catch((err)=>{
        dispatch(fetch_user_failure(err.message))
      })
   }
}