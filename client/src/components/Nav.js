import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Popup from "reactjs-popup";

import * as auth from "../modules/auth";

class Nav extends Component {
  render() {
    return (
      <div>
        Torrent External
        <Popup trigger={<button className="button"> Magnet </button>}>
          {close => (
            <form
              onSubmit={e => {
                e.preventDefault();
                // this.handleSubmitMagnet(e);
                close();
              }}
            >
              <label>
                Link:
                <input type="text" name="name" />
              </label>
              <button type="submit">Add</button>
            </form>
          )}
        </Popup>
        <Popup trigger={<button className="button"> Seed </button>}>
          <span> Seed content </span>
        </Popup>
        <Popup trigger={<button className="button"> Setting </button>}>
          <span> Setting content </span>
        </Popup>
        <button onClick={this.props.auth.signOut}>Sign-out</button>
      </div>
    );
  }
}

export default connect(
  state => ({}),
  dispatch => ({
    auth: bindActionCreators(auth, dispatch)
  })
)(Nav);
