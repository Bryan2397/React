import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
  color: "red",
  fonSize: "20px",
  border: "2px solid black",
};

customStyle.color = "blue";

ReactDOM.render(
  <h1 style={customStyle}> Hello World!</h1>,
  document.getElementById("root")
);
