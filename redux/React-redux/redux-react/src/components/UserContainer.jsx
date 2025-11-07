import {connect} from 'react-redux'
import {useEffect} from 'react'
import { fetcher } from '../redux/user/userActionCreators'


const UserContainer = ({userData, userFetcher})=>{
    // console.clear()
    console.log('user>>>',userData)
    // console.log(userData)
 useEffect(()=>{
     userFetcher()
 },[])

 if(userData.isLoading){
    return(
        <h1>its Loading...</h1>
    )
 }

 if(Array.isArray(userData.data)){
    return(
        <>{
         userData.data.map((cu)=>(
           <p>{cu.username}</p>
         ))
        }</>
    )
}
}// end

const mapStateToProps = (state)=>{
    return{
        userData: state.users
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        userFetcher: ()=>  dispatch(fetcher())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)