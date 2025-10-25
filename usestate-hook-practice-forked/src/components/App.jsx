import React, { useState } from "react";

function App() {
  const [time, setTime] = useState("TIME");

  function Time() {
    const currHours = String(new Date().getHours());
    const currMinutes = String(new Date().getMinutes());
    const currSeconds = String(new Date().getSeconds());
    setTime(currHours + ":" + currMinutes + ":" + currSeconds);
  }

  setInterval(Time, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={Time}>Get Time</button>
    </div>
  );
}

export default App;
