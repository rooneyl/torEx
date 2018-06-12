import React from "react";
import axios from "axios";
import Popup from "reactjs-popup";

export default class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      magnetLink: ""
    };
    this.handleChangeMagnet = this.handleChangeMagnet.bind(this);
    this.handleSubmitMagnet = this.handleSubmitMagnet.bind(this);
  }

  handleChangeMagnet(event) {
    this.setState({ magnetLink: event.target.value });
  }

  handleSubmitMagnet(event) {
    event.preventDefault();

    const link = {
      link: this.state.magnetLink
    };

    axios
      .post(`https://httpbin.org/post`, { link })
      .then(res => {
        console.log("Post[Magnet] Success");
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log("Post[Magnet] Failed");
        console.log(err);
      });
  }

  // TODO
  // 0. vim error detaction fix(ale)
  // 1. axios implementation
  // 2. react popup
  // 3. props icon
  // 4. alignment of menus

  render() {
    return (
      <div>
        <Popup trigger={<button className="button"> Magnet </button>}>
          {close => (
            <form
              onSubmit={e => {
                this.handleSubmitMagnet(e);
                close();
              }}
            >
              <label>
                Person Name:
                <input type="text" name="name" onChange={this.handleChange} />
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
      </div>
    );
  }
}
