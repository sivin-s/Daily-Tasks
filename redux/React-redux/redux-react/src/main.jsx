import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

//  redux provider
import {Provider} from 'react-redux'
import {cakeStore} from './redux/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={cakeStore}>
      <App />
    </Provider>
  </StrictMode>,
)
