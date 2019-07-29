import { useState, useEffect } from 'react'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({})
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback()
    }
  }, [errors])

  const handleSubmit = event => {
    if (event) event.preventDefault()
    setErrors(validate(values))
    setIsSubmitting(true)
  }

  const handleChangeCheckbox = event => {
    event.persist()
    console.log(event.target.name, event.target.checked)
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.checked
    }))
  }
  const handleChange = event => {
    event.persist()
    setValues(values => ({
      ...values,
      [event.target.name]: event.target.value
    }))
  }

  return {
    handleChange,
    handleChangeCheckbox,
    handleSubmit,
    values,
    errors,
    isSubmitting
  }
}

export default useForm
