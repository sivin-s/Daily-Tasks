import { useEffect, useState } from "react"
import { B } from "./B.jsx"

export const A = (props)=>{
    // console.log(props.props.user)
    // const [user, setUser] = useState('')  // this is passing value from child to parent
   useEffect(()=>{
    //   console.log(user)
   })
   return (
    <>
    {/* <B props={props.props}/> */}
    {/* <B props={setUser}/>  // this is passing value from child to parent */}
    </>
   )
}