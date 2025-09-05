import {useEffect, useReducer} from 'react'

function reducer(state, action){  // want to pure fn
  // console.log(action)
   switch(action.type){
     case 'increment':
      return {...state, value: state.value + action.payload}
     case 'decrement':
      return {...state, value:state.value + action.payload}
     case 'color':
       return {...state, color: action.payload }
     default:
      return state
   }
}

function App() {
  const [state, dispatch] = useReducer(reducer,{
    value: 0
  })
  useEffect(()=>{
     console.log("hello")
  })
  console.log(state)
  return(<>
      <h1 style={{color: state.color ? state.color : ''}}>{state.value}</h1>
      <button onClick={(e)=>{
        e.preventDefault()
        dispatch({type:'increment',payload:1})
      }}>Increment</button>
      <button onClick={(e)=>{
        e.preventDefault()
        dispatch({type:'decrement', payload:-1})
      }}>Decrement</button>
      <button onClick={(e)=>{
         e.preventDefault()
         dispatch({type:'color',payload:'red'})
      }}>Red</button>
      <button onClick={(e)=>{
         e.preventDefault()
         dispatch({type: 'color', payload:'orange'})
      }}>
       Orange
      </button>
  </>)
}

export default App
