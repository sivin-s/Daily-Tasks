import React from 'react'
import {useState} from 'react'
import {connect} from 'react-redux'
import {newCakeBuy} from '../redux/cake/newCakeAction.js'

function NewCakecontainer(props) {
  console.log('i>>',props)
  const [count, setCount] = useState(1)
  return (
    <div>
      <h1> New Cake container {props.numsOfCakes}</h1>
      <input type="text" value={count} onChange={(e)=> setCount(e.currentTarget.value)} />
      <button onClick={()=> props.buy_cake(count)}>Buy {count} cake</button>
    </div>
  )
}

const mapStateToProps = state =>{
  return{
    numsOfCakes: state.cake.numsOfCakes
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    buy_cake: (count)=> dispatch(newCakeBuy(count))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakecontainer)
