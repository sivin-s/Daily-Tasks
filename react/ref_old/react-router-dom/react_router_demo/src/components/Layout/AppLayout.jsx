import React from "react"
import { Link, Outlet } from "react-router-dom"

export const Header = ()=>{
    return ( 
        <div style={{border: '1px solid black;width:100%;height:80px'}}>
          <ul>
            <Link to="/">
                 <li>home</li>
            </Link>
           
           <li>
              <Link to='/about'>
                  about
              </Link>
           </li>
            <li>contact us</li>
          </ul>
        </div>
    )
}
export const Footer = ()=>{
    return <div style={{border: '1px solid black;width:100%;height:80px'}}>Header</div>
}

//! App layout
export const AppLayout = ()=>{
    return(
     <React.Fragment>
        <Header/>
         <Outlet/> {/* all children come to "Outlet" */}
        <Footer/>
     </React.Fragment>
    )
}