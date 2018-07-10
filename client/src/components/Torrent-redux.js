import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as file from "../modules/file";

class Torrent extends Component {
  componentDidMount() {
    const { userInfo } = this.props;
    this.props.file.getFileList(userInfo);
  }

  render() {
    return (
      <div>
        {this.props.initialized ? (
          <div>
            <h1>INITIALIZED: File List</h1>
            <br />
            <pre>{JSON.stringify(this.props.files, null, 2)}</pre>
          </div>
        ) : this.props.error ? (
          <h1>Connection Error</h1>
        ) : (
          <h1>Initializing....</h1>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    userInfo: state.auth.userInfo,
    initialized: state.file.initialized,
    error: state.file.error,
    files: state.file.files
  }),
  dispatch => ({
    file: bindActionCreators(file, dispatch)
  })
)(Torrent);
