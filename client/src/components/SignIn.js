import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as auth from "../modules/auth";

class SignIn extends Component {
  submit = value => {
    this.props.authorize.authorize(value);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="form">
        <div className="container">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit(this.submit)}>
            <Field
              name="email"
              component="input"
              type="text"
              placeholder="Email"
            />
            <br />
            <Field
              name="password"
              component="input"
              type="password"
              placeholder="Password"
            />
            <br />
            <button type="submit">Sign In</button>
          </form>
        </div>
        Debug Info:
        <br /> Pending: {this.props.pending ? "TRUE" : "FALSE"}
        <br /> Error: {this.props.error ? "TRUE" : "FALSE"}
      </div>
    );
  }
}

const signinForm = reduxForm({
  form: "signin"
})(SignIn);

export default connect(
  state => ({
    pending: state.auth.pending,
    error: state.auth.error
  }),
  dispatch => ({
    authorize: bindActionCreators(auth, dispatch)
  })
)(signinForm);
