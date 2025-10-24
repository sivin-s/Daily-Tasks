import { useEffect, useState } from "react"


function App(){
  const [state, setState] = useState(0)
   useEffect(()=>{
      const timer = setInterval(()=>{
           setState((prev)=>prev+1)
      },1000)
      return ()=>  clearInterval(timer)
   },[])

   useEffect(()=>{
     console.log(state)
      if(state===5){
        throw new Error('timer break!!!!')
      }
   },[state])
   return(
    <>
      <h1>Welcome..........{state}</h1>
    </>
   )
}

export default App