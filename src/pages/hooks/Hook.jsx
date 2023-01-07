import React, { useState } from "react";
import "./Hook.css";

const Hook = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    setCounter(counter - 1);
  };

  const handleChangeInput = (event) => {
    setCounter(+event.target.value);
  };

  return (
    <div className="btn-wrapper">
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
      <div>{counter}</div>
      <input type="number" onChange={handleChangeInput} value={counter} />
    </div>
  );
};

export default Hook;
