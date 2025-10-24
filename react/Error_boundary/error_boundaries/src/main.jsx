import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ErrorBoundaries from '../ErrorBoundariesComponents/ErrorBoundaries.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundaries fallback={'something wrong!!!'}>
        <App />
    </ErrorBoundaries>
  </StrictMode>,
)
