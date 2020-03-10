export default function validate(values) {
  const errors = {};
  if (!values.email) {
    errors.email = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }

  if (!values.fullname && !this.state.formToggle) {
    errors.fullname = "Required";
  }
  return errors;
}
