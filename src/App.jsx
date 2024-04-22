import { useState } from 'react' 
import './App.css'
import dice from "../public/images/icon-dice.svg"

function App() {
  

  return (
    <div className='advice-container'>
      <h1 className='advice-number'>ADVICE #117</h1>
      <div className='advice-text'>
        <p>
          "It is easy to sit up and take notice, 
          what's dificult is getting up and taking action."
        </p>
      </div>
      <div className='dice-container'>
        <img src={dice} alt="" />
      </div>
    </div>
  )
}

export default App
