import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { input: "" };
  render() {
    return (
      <div>
        <form action="">
          <input type="search"></input>
        </form>
      </div>
    );
  }
}
