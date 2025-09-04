import { useEffect, useRef, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
    const pRef = useRef()
    // const [re_render, set_re_render] = useState(0)
    const [name, setName] =  useState('')
   useEffect(()=>{
    //  pRef.current.style.color='red'
      pRef.current = name
      // console.log(pRef)
      console.log(name)
   },[name])
  //  const handle = ()=>{
  //     set_re_render((pre)=> pre+1)
  //  }
  return (
    <>
      {/* <input type="text" /> */}
      {/* <p ref={pRef} >details</p> */}
      <input value={name}   type="text" onChange={(e)=>setName(e.target.value)}/>
      <p>Name is  {name}  and it used to be {pRef.current}</p>
      {/* <p>Reader times {re_render}</p> */}
      {/* <button style={{color: name ? "green": "red"}} onClick={handle}>Click</button> */}
    </>
  )
}

export default App
