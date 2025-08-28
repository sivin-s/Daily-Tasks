import {createBrowserRouter}  from 'react-router';
import {App_layout} from './App_Layout'
import {Home_Page} from './pages/Home_Page'
import {About_Page} from './pages/About_Page'
import {Profile_CMP} from './components/class_based_profile'

export const router = createBrowserRouter([
    {
       path:'/',
       element:  <App_layout/>,
       children:[
           {
            path: '/',
            element: <Home_Page/>
           },
           {
            path: '/about',
            element: <About_Page/>,
            // children:[
            //     {
            //         path: 'profile',
            //         element: <Profile_CMP/>
            //     }
            // ]
           }
       ]
    }
])