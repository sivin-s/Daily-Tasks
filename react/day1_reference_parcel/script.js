import React from "react";
import ReactDOM from 'react-dom/client';

// create ele 

const h1 = React.createElement('h1',{style:{color:'red'}},"Heading h1");
const h2 = React.createElement('h2',{style:{color:'orange'}},"Heading h2");
const h3 = React.createElement('h3',{style:{color:'green'}},"Heading h3");
const container = React.createElement('div',{style:{border:'4px solid red',backgroundColor:'yellow'}},[h1,h2,h3]);

const root = ReactDOM.createRoot(window.document.getElementById('root'));
root.render(container);

