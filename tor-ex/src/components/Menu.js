import React from "react";

export default class Menu extends React.Component {
  render() {
    // need to add icons
    return <button onClick={this.props.onClick}>{this.props.name}</button>;
  }
}
