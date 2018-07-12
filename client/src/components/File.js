import React, { Component } from "react";

class File extends Component {
  render() {
    const { name, size, downloaded, complete, dir } = this.props.info;

    return (
      <div
        style={{
          border: "1px solid black"
        }}
      >
        FileName : {name}
        <br />
        Size : {size}
      </div>
    );
  }
}

export default File;
