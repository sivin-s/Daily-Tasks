
import './App.css'
import {useContext} from 'react'
import {val_context} from '../utils/context'

function App() {

  const {other,arr} = useContext(val_context)
    console.log(other)
  return (
    <>
     <h1>{arr}</h1>
     <h1>{other}</h1>
    </>
  )
}

export default App
