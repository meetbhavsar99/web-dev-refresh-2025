import { useState } from "react";
import "./Toggler.css";

export default function ToggleCounter() {
  const [face, setFace] = useState(true);
  const toggleFace = () => setFace(!face);
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);
  return (
    <>
      <h1 className="Toggler" onClick={toggleFace}>
        {face ? "😊" : "☹️"}
      </h1>
      <h1 className="Toggler">{count}</h1>
      <button onClick={incrementCount}>+</button>
    </>
  );
}
