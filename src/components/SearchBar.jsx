import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { input: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.input);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="search"
              id="search"
              value={this.state.input}
              onChange={(e) => this.setState({ input: e.target.value })}
            ></input>
          </div>
          <button className="ui inverted primary button">Primary</button>
        </form>
      </div>
    );
  }
}
