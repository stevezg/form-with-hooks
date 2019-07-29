export default function validate(values) {
  let errors = {}
  if (!values.name) {
    errors.name = 'Business name is required'
  }
  if (!values.email) {
    errors.email = 'Business Email address is required'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Business Email address is invalid'
  }
  if (!values.username) {
    errors.username = 'username name is required'
  }
  if (!values.password) {
    errors.password = 'password is required'
  } else if (!values.password.length >= 6) {
    errors.password = 'password should have six characters'
  } else if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,50}$/.test(values.password)) {
    errors.password = 'password must contain 1 uppercase, 1 lowercase, 1 digit'
  }

  if (!values.terms) {
    errors.terms = 'must agree to the terms and conditions'
  }
  if (!values.policy) {
    errors.policy = 'must agree to the privacy policy'
  }
  return errors
}
