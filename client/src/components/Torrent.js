import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Nav from "./Nav";
import File from "./File";
import * as file from "../modules/file";

class Torrent extends Component {
  componentDidMount() {
    const { userInfo } = this.props;
    this.props.file.getFileList(userInfo);
  }

  render() {
    const mapToFiles = files => {
      return files.map(fileInfo => <File info={fileInfo} />);
    };

    return (
      <div style={{ opacity: this.props.initialized ? 1 : 0.4 }}>
        <Nav />
        {this.props.initialized ? (
          <div>{mapToFiles(this.props.files)}</div>
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
