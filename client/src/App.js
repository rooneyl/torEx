import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SignIn from './components/SignIn';
import Torrent from './components/Torrent';

class App extends Component {
  render() {
    return (
      <div
        className="App"
        style={{
          display: 'flex',
          justifyContent: 'center',
          opacity: this.props.pending ? 0.4 : 1
        }}
      >
        {this.props.authorized ? <Torrent /> : <SignIn />}
      </div>
    );
  }
}

App.propTypes = {
  pending: PropTypes.bool,
  authorized: PropTypes.bool
};

export default connect(state => ({
  pending: state.auth.pending,
  authorized: state.auth.authorized
}))(App);
