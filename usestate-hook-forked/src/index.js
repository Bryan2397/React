import React from "react";
import ReactDOM from "react-dom";
import "./../public/styles.css";
import App from "./components/App";

var count = 0;

function increase() {
  count++;
}

ReactDOM.render(<App />, document.getElementById("root"));
