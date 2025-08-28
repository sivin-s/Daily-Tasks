
import {Outlet} from 'react-router'

export const App_layout =()=>(
   <>
      <header>
        <h1>Header Hello!!</h1>
      </header> 
       <Outlet/>
      <footer>
        <h1>Footer &copy;</h1>
      </footer>
   </>
)