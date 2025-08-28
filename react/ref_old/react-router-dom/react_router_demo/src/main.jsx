import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Error} from './components/Error.jsx'
import {RestaurantMenu} from './components/RestrauntMenu.jsx'

//! layout
import { AppLayout } from './components/Layout/AppLayout.jsx'

// import HomePage from "../../Pages/HomePage"
// import AboutPage from "../../Pages/AboutPage.js"


//! react router dom - config...
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import AboutPage from './Pages/AboutPage.jsx'


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <Error/>, // 404 error page
    children:[
      {
        path:'/',
        // element: <Body/>  
      },
        {
        path: '/about',
        element: <AboutPage/>,
        children:[   //! <Outlet>  assigned in About Page <About/> 
          {
            path:'profile', // localhost:0000/about/profile
            element: <Profile/>
          }
        ]
      },
      {
        path:"/contact",
        element: <Contact/>
      },
      {
        path: "/restaurant/:id", //! dynamic routing
        element: <RestaurantMenu/>
       }
    ]
  }
  
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter }/>
  </StrictMode>,
)
