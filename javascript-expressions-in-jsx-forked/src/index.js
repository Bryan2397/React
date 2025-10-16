import React from "react";
import ReactDOM from "react-dom";

const name = "Bryan";
const lname = "Mirtil";
const lucky = 7;

ReactDOM.render(
  <div>
    <h1>Hello {name + " " + lname} </h1>
    <h2>{`${name} ${lname}`}</h2>
    <p>Your lucky number is {Math.floor(Math.random() * 9 + 1)}</p>
  </div>,
  document.getElementById("root")
);
