
import {ICE_CREAM} from '../iceCream/iceCream_constant_Type.js' 

const initialState={
    numsOfIceCream: 10
}

export const iceCreamReducer = (state=initialState, action)=>{
        console.log('ice cream reducer called')
    switch(action.type){
        case ICE_CREAM:
            return{
                ...state,
                numsOfIceCream: state.numsOfIceCream-1
            }
        default:
            return state
    }
}

export default iceCreamReducer