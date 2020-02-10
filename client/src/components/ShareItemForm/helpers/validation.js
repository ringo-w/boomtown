export default function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  if (!values.tags) {
    errors.tags = "Required";
  }

  return errors;
}
