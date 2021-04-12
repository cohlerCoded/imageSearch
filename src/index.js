import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
ReactDOM.render(<App />, document.querySelector("#root"));
