import React from "react";
import Menu from "./Menu.js";

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: ["Magnet", "Seed", "Setting"]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(menu) {
    // TODO
    // 0. vim error detaction fix(ale)
    // 1. axios implementation
    // 2. react popup
    // 3. props icon
    // 4. alignment of menus
    console.log(menu);
  }

  render() {
    const deployMenu = menus => {
      return menus.map((menu, i) => {
        return (
          <Menu onClick={() => this.handleClick(menu)} name={menu} key={i} />
        );
      });
    };
    return <div>{deployMenu(this.state.menus)}</div>;
  }
}
