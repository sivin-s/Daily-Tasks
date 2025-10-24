import { Outlet,Link } from "react-router"

export const BookLayout = ()=>{
   
    return(
        <>     {/*links are static*/}
               <Link  to="/books/1">Book1</Link> <br />
             <Link to="/books/2">Book1</Link> <br />
               <Link to="/books/new">New Book</Link>
               {/* dynamic is outlet(children) */}
            <Outlet context="hello"/>
            <Outlet context="hello"/>
        
        </>
    )
}