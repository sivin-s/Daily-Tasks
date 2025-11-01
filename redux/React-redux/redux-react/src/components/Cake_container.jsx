import {connect} from 'react-redux'
import { buy_cake } from '../redux/cake/cakeActions'


function Cake_container(props){
    console.log('u>',props)
    return(
        <>
          <h1>Cake Container (old way) {props.numsOfCakes}</h1>
          <button onClick={()=> props.buyCake()}>Click</button>
        </>
    )
}

const mapStateToProps = (state)=>{
  return{
    numsOfCakes: state.cake.numsOfCakes
  }
}

const mapDispatchToProps = (dispatch)=>{
   return{
     buyCake: ()=> dispatch(buy_cake())
   }
}

// connect() is for connect component to store. (old version)
export default connect(mapStateToProps,mapDispatchToProps)(Cake_container)