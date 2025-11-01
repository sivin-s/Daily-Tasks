import React from 'react'
import {connect} from 'react-redux'
import { buy_iceCream } from '../redux/iceCream/iceCream_Actions'

function IckCream_container(props) {
    console.log('o>',props)
  return (
    <>
      <h2>Num of IceCream - {props.numsOfIceCream}</h2> 
      <button onClick={()=> props.buyIcecream()}>Click</button>
    </>
  )
}

const mapStateToProps = state =>{
   return{
      numsOfIceCream: state.iceCream.numsOfIceCream - 1
   }
}

const mapDispatchToProps = dispatch => {
    return{
        buyIcecream: ()=> dispatch(buy_iceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IckCream_container)
