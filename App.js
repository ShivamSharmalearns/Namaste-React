// # Chapter 03 - Laying the Foundation

// imported react and reactdom from nodemodule folder
// import {React, createElement as ce} from 'react';
import React from "react";
import ReactDOM from "react-dom/client";

/**********************************************************/

// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
//instead of writiong that code below , we write const JSXheading =.....
//this code is written with JS
/*
const heading = React.createElement(
  "h1" ,
  { id : "heading"},
  "Namaste React"
);
console.log(heading);
*/

//BOTH CODES ARE SAME
//This code is written with JSX
//this is not html inside the JS but it is HTML-like syntax
const JSXheading = <h1 id="heading">Hello world</h1>;
console.log(JSXheading);

/**********************************************************/

// create header element using aJSX
// JSX => React.createElement => Object => HTML (DOM) (babel does all the conversion)
const heading = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
);


// React Component 
// Functional component - new way of writing component 
// Class component - old way of writing component

// Title component is functional component
const Title = () => {
  return (<h1 id="title" key="title">Namaste React</h1>)
}
  //or - BOTH ARE SAME (remember parenthesis and return keyword)

/*
without return
const Title = () => <h1 id="title" key="title">Namaste React</h1>;
*/

// const NuMbEr = 10000;

//continuing the above code of Title
// Header component is functional component
const HeaderComponent = function (){
  return (
    <div>
      <Title/> {/*This is COMPONENT COMPOSITION*/} 
       {/* Title/ means uper wala Title ka code yha aa jayega bss Title/ likhne se*/}
      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}
      {console.log(10)}
      {/* agar yha hum NuMbEr likhenge to uper wala 10000 is code ke amder aa jayega */}
    <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>
    </div>
  )
}
// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));
// passing react element inside root
//render in JSX is different from simple react
//  <HeaderComponent/>
root.render(<HeaderComponent/>);
