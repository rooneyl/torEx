import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import * as auth from "../modules/auth";

class SignIn extends Component {
  submit = userInfo => {
    this.props.auth.signIn(userInfo);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="form">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>
            Torrent<br />External
          </h2>
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
            <h2>
              <button type="submit">Sign In</button>
            </h2>
          </form>
        </div>
        {this.props.error ? "!Error!" : <br />}
      </div>
    );
  }
}

SignIn.propTypes = {
  error: PropTypes.bool,
  auth: PropTypes.object,
  handleSubmit: PropTypes.func
};

const signinForm = reduxForm({
  form: "signin"
})(SignIn);

export default connect(
  state => ({
    error: state.auth.error
  }),
  dispatch => ({
    auth: bindActionCreators(auth, dispatch)
  })
)(signinForm);
