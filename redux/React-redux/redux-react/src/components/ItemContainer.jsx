import React from 'react'
import {connect} from 'react-redux'
import { buy_iceCream } from '../redux/iceCream/iceCream_Actions'
import { newCakeBuy } from '../redux/cake/newCakeAction'

function ItemContainer(props) {
    console.log('item>',props)
  return (
    <div>
     <h1> no of Items {props.item}</h1>
     <button onClick={props.buy_item}>click</button>
    </div>
  )
}

const mapStateToProps = (state,ownProps)=>{  // mapping data from redux store
    console.log('y>>>>>>>>',ownProps)
    const item = ownProps?.cake ? state.cake.numsOfCakes : state.iceCream.numsOfIceCream
    return {
        item
    }
}

const mapDispatchToProps = (dispatch,ownProps)=>{
    const buy_item = ownProps.cake ? 
                 ()=> dispatch(newCakeBuy()):
                 ()=> dispatch(buy_iceCream())
    return{
        buy_item
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)
