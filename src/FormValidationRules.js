export default function validate(values){
  let errors = {}
  if (!values.name) {
    errors.name = 'Business name is required';
  }
  if (!values.email) {
    errors.email = 'Business Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Business Email address is invalid';
  }
  if (!values.username) {
    errors.username = 'username name is required';
  }
  if (!values.password) {
    errors.password = 'password is required';

  } else if (values.password.length >= 6) {
    errors.email = 'password should have six characters';
  }

  return errors;
}