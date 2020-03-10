export default function validate(values, formToggle) {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.fullname && formToggle) {
    errors.fullname = "Required";
  }
  return errors;
}
