import React from 'react'
import { Button, Form } from 'react-bootstrap'

import logo from './logo.svg'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='logo' alt='logo' />
        <h4 className='App-header-title'>LET'S GET STARTED</h4>
        <Form>
          <Form.Group controlId='businessName'>
            <Form.Label className='label'>Businsess Name</Form.Label>
            <Form.Control type='text' placeholder='Marina Dog Daycare' />
          </Form.Group>

          <Form.Group controlId='businessEmail'>
            <Form.Label className='label'>Businsess Email</Form.Label>
            <Form.Control type='text' placeholder='Marina Dog Daycare' />
          </Form.Group>

          <Form.Group controlId='username'>
            <Form.Label className='label'>Create a Username</Form.Label>
            <Form.Control type='text' placeholder='DogLover' />
          </Form.Group>

          <Form.Group controlId='password'>
            <Form.Label className='label'>Password 6 characters | 1 uppercase | 1 digit</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>

          <Form.Group controlId='website'>
            <Form.Label className='label'>Website (optional)</Form.Label>
            <Form.Control type='text' placeholder='mydogcare.com' />
          </Form.Group>

<Form.Group controlId="exampleForm.ControlSelect1">
    <Form.Label>Type of Business</Form.Label>
    <Form.Control as="select">
    <option>Select your Businsess</option>
    </Form.Control>
  </Form.Group>

          <Form.Group controlId='terms'>
            <Form.Label className='label'>Terms of Service</Form.Label>
            <Form.Check
              className='checkboxSubText'
              type='checkbox'
              label='I have read and I do accept the terms of services'
            />
          </Form.Group>


          <Form.Group controlId='privacyPolicy'>
            <Form.Label className='label'>Privacy Policy</Form.Label>
            <Form.Check
              className='checkboxSubText'
              type='checkbox'
              label='I have read and I do accept privacy policy '
            />
          </Form.Group>

          <Button variant='primary' type='submit'>
            REGISTER
          </Button>
        </Form>
      </header>
    </div>
  )
}

export default App
