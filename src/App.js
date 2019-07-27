import React, {useState, useValidation} from 'react'
import { Button, Form } from 'react-bootstrap'
import LetsGetStartedForm from "./components/LetsGetStartedForm"
import logo from './simplr.png'
import './App.css'


function App() {
  return (
    <div className='container'>
     <div className='App'>
      <header className='App-header'>
        <img src={logo} className='logo' alt='logo' />
        <LetsGetStartedForm/>
      </header>
     </div>
    </div>
  )
}

export default App
