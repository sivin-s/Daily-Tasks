import { useEffect, useContext} from "react"
import {useUserContext}  from '../context/useUserContext'

export const C =()=>{
    // const userContext = useContext(useUserContext)
    const a = useUserContext()
    useEffect(()=>{
        // console.log(userContext)
    })
    return <h1>{a}</h1>
}