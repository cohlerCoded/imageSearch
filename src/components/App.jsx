import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const unsplashKey = process.env.REACT_APP_UNSPLASH_KEY;

export default class App extends Component {
  onSearchSubmit(input) {
    console.log(unsplashKey);
    axios.get("https://api.unsplash.com/search/photos", {
      params: { query: input },
      headers: { Authorization: `Client-ID ${unsplashKey}` },
    });
  }
  render() {
    return (
      <div className="ui container hidden divider">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
