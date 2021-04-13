import React, { Component } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";

export default class App extends Component {
  state = { images: [] };
  onSearchSubmit = async (input) => {
    const res = await unsplash.get("/search/photos", {
      params: { query: input },
    });
    this.setState({ images: res.data.results });
  };
  render() {
    return (
      <div className="ui container hidden divider">
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}
