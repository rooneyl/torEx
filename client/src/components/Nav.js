import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Nav extends Component {
  render() {
    return (
      <div>
        Navigation Bar
        <br />
      </div>
    );
  }
}

export default connect(
  state => ({
    //add
  }),
  dispatch => ({
    //add
  })
)(Nav);
