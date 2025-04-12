import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {val_context} from '../utils/context.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <val_context.Provider value={{other:'hello',arr:'hi'}}>
       <App />
    </val_context.Provider>
  </StrictMode>,
)
