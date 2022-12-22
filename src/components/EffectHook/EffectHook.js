import React, { useEffect, useState } from "react";

const EffectHook = () => {
  useEffect(() => {
    // document.title = `You clicked ${counter} times`;
    alert(`You clicked ${counter} times`);
  }, [counter]);
  const [counter, setCounter] = useState(0);
  const [entry, setEntry] = useState("Default");

  return (
    <div>
      <p>This is counter value: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <button onClick={() => setEntry("Entry")}>Set Entry {entry}</button>
    </div>
  );
};

export default EffectHook;
