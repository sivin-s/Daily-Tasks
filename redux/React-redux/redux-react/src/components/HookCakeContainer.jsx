import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { buy_cake } from '../redux/cake/cakeActions'

function HookCakeContainer() {
  const numsOfCakes = useSelector((state)=> state.cake.numsOfCakes)
 const dispatch = useDispatch()

  return (
    <div>
      <h2>Number of cakes  (newer way)- {numsOfCakes}</h2>
      <button onClick={()=> dispatch(buy_cake())}>Click</button>
    </div>
  )
}

export default HookCakeContainer
