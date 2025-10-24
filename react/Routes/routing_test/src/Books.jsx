import { useOutletContext, useParams } from "react-router"
export const Books = ()=>{
   const {id} = useParams()
   const message = useOutletContext() // Outlet context
  return <h1>Books{id} {message}</h1>
}