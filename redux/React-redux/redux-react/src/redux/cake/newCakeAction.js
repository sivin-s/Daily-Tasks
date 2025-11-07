import {BUY_CAKE} from './cake_constant_Type'

export const newCakeBuy = (num=1)=>{
    return{
        type: BUY_CAKE,
        payload: num
    }
}