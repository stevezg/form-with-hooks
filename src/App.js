import React from 'react'
import { Button, Form } from 'react-bootstrap'
import logo from './simplr.png'
import './App.css'

function App() {
  const { validated, setValidated } = React.useState(false)

  const eventHandler = (e) => {
    e.preventDefault()
    console.log(`events were handled ${e.currentTarget}`)
  }

  return (
    <div className='container'>
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='logo' alt='logo' />
          <h1 className='App-header-title'>LET'S GET STARTED</h1>
          <Form validated={validated} onSubmit={eventHandler}>
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
              <Form.Control type='text' placeholder='DogLover' required />
              <Form.Control.Feedback></Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='password'>
              <Form.Label className='label'>
                Password{' '}
                <span className='subLabel'>
                  6 characters | 1 uppercase | 1 digit
                </span>
              </Form.Label>
              <Form.Control type='password' placeholder='Password' />
            </Form.Group>

            <Form.Group controlId='website'>
              <Form.Label className='label'>
                Website <span className='subLabel'>(Optional)</span>
              </Form.Label>
              <Form.Control type='text' placeholder='mydogcare.com' />
            </Form.Group>

            <Form.Group   controlId='exampleForm.ControlSelect1'>
              <Form.Label className='label'>Type of Business</Form.Label>
              <Form.Control as='select'>
                <option>Select your Businsess</option>
              </Form.Control>
            </Form.Group>

            <div className='form-group'>
              <label className='bold label form-label' >
                Terms of Service
              </label>
              <div className='checkboxSubText form-check'>
                <input
                  type='checkbox'
                  id='termsOfService'
                  className='form-check-input'
                />
                <label
                  title=''
                  type='checkbox'

                  className='form-check-label'
                >
                  I have read and I do accept{' '}
                  <a href='https://google.com'>terms of services</a>
                </label>
              </div>
            </div>

            <div className='form-group'>
              <label className='bold label form-label' >
                Privacy Policy
              </label>
              <div className='checkboxSubText form-check'>
                <input
                  type='checkbox'
                  id='privacyPolicy'
                  className='form-check-input'
                />
                <label
                  title=''
                  type='checkbox'

                  className='form-check-label'
                >
                  I have read and I do accept{' '}
                  <a href='https://google.com'>privacy policy</a>
                </label>
              </div>
            </div>

            <Button className="regsisterButton" variant='primary' type='submit'>
              REGISTER
            </Button>
          </Form>
        </header>
      </div>
    </div>
  )
}

export default App
