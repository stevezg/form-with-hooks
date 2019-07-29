import React from 'react'

import useForm from './hooks/useForm'
import validate from '../FormValidationRules'

export default function LetsGetStartedForm() {
  const {values, handleChange, handleSubmit} = useForm(register, validate)

  function register() {
    console.log(values)
  }

  return (
    <div>
      <h1 className='App-header-title'>LET'S GET STARTED</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label className='label form-label'>Business Name</label>
          <input
            name="name"
            className='form-control'
            type='text'
            placeholder='Marina Dog Daycare'
            onChange={handleChange}
            value={values.name || ''}
            required
          />
        </div>
        <div className='form-group'>
          <label className='label form-label'>Business Email</label>
          <input
            name="email"
            className='form-control'
            type='text'
            placeholder=''
            onChange={handleChange}
            value={values.email || ''}
            required
          />
        </div>
        <div className='form-group'>
          <label className='label form-label'>Create a Username</label>
          <input
            name="username"
            className='form-control'
            type='text'
            placeholder='DogLover'
            onChange={handleChange}
            value={values.username || ''}
            required
          />
        </div>

        <div className='form-group'>
          <label className='label form-label'>
            Password
            <span className='subLabel'>
              6 characters | 1 uppercase | 1 digit
            </span>
          </label>
          <input
            name="password"
            className='form-control'
            type='text'
            placeholder='Password'
            onChange={handleChange}
            value={values.password || ''}
            required
          />
        </div>
        <div className='form-group'>
          <label className='label form-label'>
            Website <span className='subLabel'>(Optional)</span>
          </label>
          <input
            name="website"
            className='form-control'
            type='text'
            placeholder='mydogcare.com'
            onChange={handleChange}
            value={values.website || ''}
          />
        </div>
        <div className='form-group'>
          <label className='label form-label'>Type of Business</label>
          <select
            className='form-control'
            type='text'
            placeholder='mydogcare.com'
            onChange={handleChange}

          >
            <option>Select your Business</option>
          </select>
        </div>
        <div className='form-group'>
          <label className='bold label form-label'>Terms of Service </label>

          <div className='checkboxSubText form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              onChange={(e) => {console.log("changed checkbox")}}

            />
            <label type='checkbox' className='form-check-label'>
              I have read and I do accept
              <a href='https://www.steveanderson.club'>terms of services</a>
            </label>
          </div>
        </div>
        <div className='form-group'>
          <label className='bold label form-label'>Privacy Policy </label>
          <div className='checkboxSubText form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              onChange={() => {}}

            />
            <label type='checkbox' className='form-check-label'>
              I have read and I do accept
              <a href='https://www.steveanderson.club'>privacy policy</a>
            </label>
          </div>
        </div>
        <button className='registerButton btn btn-primary' type='submit'>
          REGISTER
        </button>
      </form>
    </div>
  )
}
