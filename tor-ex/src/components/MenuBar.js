import React from "react";

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedMenu: -1
    };
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(menu) {
    this.setState({
      selectedMagnet: menu
    });
  }

  render() {
    return (
      <div>
        <h2>Mangnet</h2>
        <h2>Torrent Seed</h2>
        <h2>Setting</h2>
      </div>
    );
  }
}
