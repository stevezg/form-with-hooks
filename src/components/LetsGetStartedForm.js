import React from 'react'

import useForm from './hooks/useForm'
import validate from '../FormValidationRules'

export default function LetsGetStartedForm() {
  const {
    values,
    handleChange,
    handleChangeCheckbox,
    handleSubmit,
    errors,
    isSubmitting
  } = useForm(register, validate)

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
            name='name'
            className={`form-control ${errors.name &&
              'is-invalid'} ${!errors.name && isSubmitting && 'is-valid'}`}
            type='text'
            placeholder='Marina Dog Daycare'
            onChange={handleChange}
            value={values.name || ''}
          />
          {errors.name && <p className=' subtext'>{errors.name}</p>}
        </div>
        <div className='form-group'>
          <label className='label form-label'>Business Email</label>
          <input
            name='email'
            className={`form-control ${errors.email &&
              'is-invalid'} ${!errors.name && isSubmitting && 'is-valid'}`}
            type='text'
            placeholder='marina@mydogcare.com'
            onChange={handleChange}
            value={values.email || ''}
          />
          {errors.email && <p className=' subtext'>{errors.email}</p>}
        </div>
        <div className='form-group'>
          <label className='label form-label'>Create a Username</label>
          <input
            name='username'
            className={`form-control ${errors.username &&
              'is-invalid'} ${!errors.username && isSubmitting && 'is-valid'}`}
            type='text'
            placeholder='DogLover'
            onChange={handleChange}
            value={values.username || ''}
          />
          {errors.username && <p className=' subtext'>{errors.username}</p>}
        </div>

        <div className='form-group'>
          <label className='label form-label'>
            Password
            <span className='subLabel'>
              6 characters | 1 uppercase | 1 digit
            </span>
          </label>
          <input
            name='password'
            className={`form-control ${errors.password &&
              'is-invalid'} ${!errors.password && isSubmitting && 'is-valid'}`}
            type='text'
            placeholder='Password'
            onChange={handleChange}
            value={values.password || ''}
          />
          {errors.password && <p className='subtext'>{errors.password}</p>}
        </div>
        <div className='form-group'>
          <label className='label form-label'>
            Website <span className='subLabel'>(Optional)</span>
          </label>
          <input
            name='website'
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
              name='terms'
              className={`form-check-input ${errors.terms &&
                'is-invalid'} ${!errors.terms && isSubmitting && 'is-valid'}`}
              type='checkbox'
              onChange={handleChangeCheckbox}
              value={values.terms}
            />
            <label type='checkbox' className='form-check-label'>
              I have read and I do accept
              <a href='https://www.steveanderson.club'> terms of services</a>
            </label>
          </div>
        </div>
        <div className='form-group'>
          <label className='bold label form-label'>Privacy Policy </label>
          <div className='checkboxSubText form-check'>
            <input
              name='policy'
              className={`form-check-input ${errors.policy &&
                'is-invalid'} ${!errors.policy && isSubmitting && 'is-valid'}`}
              type='checkbox'
              onChange={handleChangeCheckbox}
              value={values.policy}
            />
            <label type='checkbox' className='form-check-label'>
              I have read and I do accept
              <a className='' href='https://www.steveanderson.club'>
                privacy policy
              </a>
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
