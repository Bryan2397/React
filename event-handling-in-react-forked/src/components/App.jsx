import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  const [color, setColor] = useState("white");

  function handleClick() {
    setHeadingText("Submitted");
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: color }}
        onMouseOver={() => setColor("black")}
        onMouseOut={() => setColor("white")}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
