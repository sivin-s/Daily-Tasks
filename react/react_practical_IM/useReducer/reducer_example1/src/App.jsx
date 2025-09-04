import React,{useReducer} from "react"

// function reducer
function reducer(state, action){
   if(action==="increment"){
        return state+1
   }else if(action === "decrement"){
    return state-1
   }

}
function App() {
    const [state, dispatch]  =  useReducer(reducer,0)

  return (
    <React.Fragment>
         <h1>{state}</h1>
         <button onClick={(e)=>{
          e.preventDefault()
          dispatch("increment")
         }}>Increment</button>
           <button onClick={(e)=>{
          e.preventDefault()
          dispatch("decrement")
         }}>Decrement</button>
    </React.Fragment>
  )
}

export default App
