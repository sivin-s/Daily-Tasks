import { useEffect } from 'react'
import {C} from './componets/index'
import {userContext} from './context/useUserContext'
function App() {
    // useEffect(()=>{
    //   console.log(useUserContext.Provider);
    // },[])
  return (
   <>
     <userContext.Provider value={"a"}>
       <C/>
     </userContext.Provider>
      <userContext.Provider value={"b"}>
       <C/>
     </userContext.Provider>
   </>
  )
}

export default App
