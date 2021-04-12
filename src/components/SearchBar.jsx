import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { input: "" };
  onInputChange(event) {
    console.log(event.target.value);
  }
  //   onInputClick() {
  //     console.log("CLICKED");
  //   }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" action="">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="search"
              id="search"
              onChange={this.onInputChange}
              //   onClick={this.onInputClick}
            ></input>
          </div>
          <button className="ui inverted primary button">Primary</button>
        </form>
      </div>
    );
  }
}
