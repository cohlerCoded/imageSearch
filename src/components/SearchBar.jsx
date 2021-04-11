import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { input: "" };
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" action="">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input type="search" id="search"></input>
          </div>
          <button class="ui inverted primary button">Primary</button>
        </form>
      </div>
    );
  }
}
