import {BUY_CAKE} from './cake_constant_Type'

export const newCakeBuy = (num)=>{
    return{
        type: BUY_CAKE,
        payload: num
    }
}