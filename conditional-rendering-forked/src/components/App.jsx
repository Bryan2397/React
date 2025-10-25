import React from "react";
import Input from "./Input";
import Login from "./Login";

var isLoggedIn = false;

const currentTime = new Date().getHours();

function renderConditionally() {
  // return isLoggedIn ? <h1>Hello</h1> : <Login />; //Ternary operator
  return currentTime > 21 && <h1>hello</h1>; // && operator
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
