export default val => {
  const errors = {}
  if (!val.firstName) {
    errors.firstName = 'Required'
  }
  if (!val.lastName) {
    errors.lastName = 'Required'
  }
  if (!val.email) {
    errors.email = 'Required'
  } else if (!/^.+@.+$/i.test(val.email)) {
    errors.email = 'Invalid email address'
  }
  if (!val.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(val.age))) {
    errors.age = 'Must be a number'
  } else if (Number(val.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}
