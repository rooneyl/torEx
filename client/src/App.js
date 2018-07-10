import React, { Component } from "react";
import { connect } from "react-redux";
import SignIn from "./components/SignIn";
import Torrent from "./components/Torrent-redux";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {this.props.authorized ? (
          <div>
            <Nav />
            <Torrent />
          </div>
        ) : (
          <SignIn />
        )}
      </div>
    );
  }
}

export default connect(state => ({
  authorized: state.auth.authorized
}))(App);
