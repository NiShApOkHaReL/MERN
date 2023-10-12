import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css' // this is external css 
// in nodejs we write require("App.css") -- common js
// import means -- ES(ecma script)
function App() {  // App() is a component because it is returning HTML
  
  const myCssObject = { // this is internal css
    color : "blue"
  }

  const name = "Nisha Pokharel"

  return (
    <>
      <h1 style={myCssObject}>Hello World</h1>
      <p style={{color:"red"}}>I am Nisha Pokharel.</p>
      <h5> Age : {20+2}</h5>
      <h3>{name}</h3>
    </>
  )
}

export default App
// in nodejs we write is as module.exports = App
