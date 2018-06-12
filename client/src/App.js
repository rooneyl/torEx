import React, { Component } from "react";
import { connect } from "react-redux";
import SignIn from "./components/SignIn";
import Torrent from "./components/Torrent";

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {this.props.authorized ? (
          <div>
            <header className="App-header">
              <h1 className="App-title">Torrent External</h1>
            </header>
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
