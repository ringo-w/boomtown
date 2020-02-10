import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import validate from "./helpers/validation";
import { Form, Field } from "react-final-form";
import {
  LOGIN_MUTATION,
  SIGNUP_MUTATION,
  VIEWER_QUERY
} from "../../apollo/queries";
import { Mutation } from "react-apollo";
import styles from "./styles";
import PropTypes from "prop-types";

const refetchQueries = [{ query: VIEWER_QUERY }];

class AccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formToggle: true,
      error: null
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Mutation mutation={LOGIN_MUTATION} refetchQueries={refetchQueries}>
        {loginMutation => (
          <Mutation mutation={SIGNUP_MUTATION} refetchQueries={refetchQueries}>
            {signupMutation => (
              <Form
                onSubmit={values => {
                  const user = { variables: { user: values } };
                  this.state.formToggle
                    ? loginMutation(user).catch(error =>
                        this.setState({ error })
                      )
                    : signupMutation(user).catch(error =>
                        this.setState({ error })
                      );
                }}
                validate={validate.bind(this)} // bind validate to 'this' scope
                render={({
                  handleSubmit,
                  pristine,
                  invalid,
                  submitting,
                  form
                }) => (
                  <form onSubmit={handleSubmit} className={classes.accountForm}>
                    {!this.state.formToggle && (
                      <FormControl fullWidth className={classes.formControl}>
                        <InputLabel htmlFor="fullname">Username</InputLabel>
                        <Field name="fullname">
                          {({ input, meta }) => (
                            <Input
                              id="fullname"
                              type="text"
                              inputProps={{
                                ...input,
                                autoComplete: "off"
                              }}
                              value={input.value}
                            />
                          )}
                        </Field>
                      </FormControl>
                    )}
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="email">Email</InputLabel>
                      <Field name="email">
                        {({ input, meta }) => (
                          <Input
                            id="email"
                            type="text"
                            inputProps={{
                              ...input,
                              autoComplete: "off"
                            }}
                            value={input.value}
                          />
                        )}
                      </Field>
                    </FormControl>
                    <FormControl fullWidth className={classes.formControl}>
                      <InputLabel htmlFor="password">Password</InputLabel>
                      <Field name="password">
                        {({ input, meta }) => (
                          <Input
                            id="password"
                            type="password"
                            inputProps={{
                              ...input,
                              autoComplete: "off"
                            }}
                            value={input.value}
                          />
                        )}
                      </Field>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                      <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                      >
                        <Button
                          type="submit"
                          className={classes.formButton}
                          variant="contained"
                          size="large"
                          color="secondary"
                          disabled={pristine || invalid}
                        >
                          {this.state.formToggle ? "Enter" : "Create Account"}
                        </Button>
                        <Typography>
                          <button
                            className={classes.formToggle}
                            type="button"
                            onClick={() => {
                              form.reset();
                              this.setState({
                                formToggle: !this.state.formToggle
                              });
                            }}
                          >
                            {this.state.formToggle
                              ? "Create an account."
                              : "Login to existing account."}
                          </button>
                        </Typography>
                      </Grid>
                    </FormControl>
                    <Typography className={classes.errorMessage}>
                      {(this.state.error &&
                        this.state.formToggle &&
                        this.state.error.graphQLErrors.message) ||
                        (this.state.error &&
                          !this.state.formToggle &&
                          this.state.error.graphQLErrors.message)}
                    </Typography>
                  </form>
                )}
              />
            )}
          </Mutation>
        )}
      </Mutation>
    );
  }
}
AccountForm.propTypes = {
  classes: PropTypes.object.isRequired,
  loginMutation: PropTypes.func.isRequired,
  signupMutation: PropTypes.func.isRequired
};

export default withStyles(styles)(AccountForm);
