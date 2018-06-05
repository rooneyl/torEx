import React, { Component } from "react";
import "./css/App.css";
import MenuBar from "./components/MenuBar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Torrent External</h1>
        <MenuBar />
      </div>
    );
  }
}

export default App;
