// import {Welcome_user} from './Welcome_user'
// import {UserDetails} from './UserDetails.jsx'
import {BookLayout} from './BookLayout.jsx'
import {BookList} from './BookList.jsx' 
import {Books} from './Books.jsx'  // id
import {NewBook} from './NewBook.jsx'
import {HashRouter,MemoryRouter, Routes, Route} from 'react-router'
function App(){
   return(
   <>
   {/*        <MemoryRouter>  wrap is for testing it work no url interacts loads from memory */}
          
             
        
          <Routes>

          
            <Route path='/' element="hello"></Route>
            <Route path='/fuck' element={<h1>Hello</h1>}/>
              {/*dynamic*/}
            {/* <Route path='/fuck/:id' element={<UserDetails/>}/>  */}
             {/*static*/}
            {/* <Route path='/fuck/new' element={<UserDetails/>}/>  */}
         
           {/* nested route*/}
            {/* <Route path='/books'>
                 <Route index element={<Books/>}/>
                 <Route path='new' element={<NewBook/>}/>  // use static before dynamic routes
                 <Route path=':id' element={<BookList/>}/>
            </Route> */}

            <Route path='/books'   element={<BookLayout/>}> {/* outlet */}
                 <Route path=':id' element={<Books/>}/>
                 <Route path='new' element={<NewBook/>}/>
            </Route>
            <Route  path='*' element="Go Back fucker to home page"/>
          </Routes>
       
    
   </>
   )
}
export default App