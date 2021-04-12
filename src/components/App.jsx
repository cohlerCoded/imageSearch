import React, { Component } from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const unsplashKey = process.env.REACT_APP_UNSPLASH_KEY;

export default class App extends Component {
  async onSearchSubmit(input) {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: input },
      headers: { Authorization: `Client-ID ${unsplashKey}` },
    });
    console.log(res.data.results);
  }
  render() {
    return (
      <div className="ui container hidden divider">
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
