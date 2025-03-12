import {createRoot} from "react-dom/client";
import {StrictMode}  from "react";
import './index.css'

// footer
const Footer = ()=>{
    return(
       <div className="footer">
         <table>
            <thead>
                <tr>
                    <th style={{color:"#ffff"}}>Wooo</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                   <td>&nbsp;</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td style={{color:"#ffff"}}>&copy;&nbsp;copyright</td>
                </tr>
            </tfoot>
        </table>
       </div>
    )
}

// cards
const Cards=()=>{
    return(
        <div className="card">
            <img alt="img" src=""/>
        </div>
    )
}

// section
const Section = ()=>{
    return(
        <div className="section">
            <Cards/>
        </div>
    )
}

// nav list
// const NavList = ()=>{
//     return
// }

// heading
const Heading =()=>{
    return(
        <div style={{color:"#fff",textAlign:"center"}} className="header">
            <h1 style={{marginTop:'28px'}}>Why?</h1>
        </div>
    )
}

// main
const AppLayout = ()=>{
  return(
    <div className="container">
        <Heading/>
        <Section/>
        <Footer/>
    </div>
  )
}

// config root
createRoot(window.document.getElementById("root"))
.render(
    <StrictMode>
         <AppLayout/>
    </StrictMode>
)