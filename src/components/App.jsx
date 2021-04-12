import React, { Component } from "react";
import SearchBar from "./SearchBar";

export default class App extends Component {
  onSearchSubmit(input) {
    console.log(input);
  }
  render() {
    return (
      <div className="ui container hidden divider">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
