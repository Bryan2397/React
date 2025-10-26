import React, { useState } from "react";

function App() {
  const [curr, setCurr] = useState("");
  const [items, setItems] = useState([]);

  function handleAdd(event) {
    setItems((prevItem) => {
      return [...prevItem, curr];
    });
  }

  function handleChange(event) {
    setCurr(event.target.value);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={curr} />
        <button onClick={handleAdd} value={curr}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
