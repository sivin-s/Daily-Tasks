import {FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS} from '../user/userActionType'

const initialState={
    isLoading: false,
    data: [],
    err: ''
}

export const userReducer = (state=initialState,action)=>{
    switch(action.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                isLoading: true
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: action.payload,
                err: ''
            }
        case FETCH_USER_FAILURE:
            return{
                ...state,
                isLoading: false,
                err: action.payload,
                data: []
            }
        default:
            return state
    }
}

