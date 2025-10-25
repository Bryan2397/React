import React from "react";
import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

var userIsRegistered = false;

function renderConditionally() {
  return !userIsRegistered ? (
    <form>
      <Input type="password" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Confirm Password" />
      <Button type="submit" input="Register" />
    </form>
  ) : (
    <form>
      <Input type="password" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button type="submit" input="Login" />
    </form>
  );
}

function App() {
  return <div className="container">{renderConditionally()}</div>;
}

export default App;
