import {BUY_CAKE} from './cake_constant_Type'

const initialState={
   numsOfCakes: 10
}

// const cakeReducer =(state=initialState,action)=>{
//     console.log('cake reducer called!')
//     switch(action.type){
//         case BUY_CAKE:
//             return{
//                 ...state,
//                 numsOfCakes: state.numsOfCakes-1
//             }
//         default:
//             return state
//     }
// }

const cakeReducer = (state=initialState,action)=>{
    console.log('ac>',action)
 switch(action.type){
    case BUY_CAKE:
        return{
            ...state,
            numsOfCakes: state.numsOfCakes - action.payload
        }
    default:
        return state;
 }
}

export default cakeReducer;