import React, { useState } from "react";
import "./index.css";
function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count >= 0 && count <= 99) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count <= 100 && count !== 0) {
      setCount(count - 1);
    }
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <div className="header">
        <h1>Counter Application</h1>
        <p style={{ fontFamily: "TimesNewRoman" }}>
          Counts number from 0 to 100
        </p>
      </div>
      <div className="App">
        <div className="count">
          <h1 className="dis">{count}</h1>
          <div className="btn">
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>+</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
