import { useState, useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(function myEffect() {
    console.log("myEffect was called!");
  }, []);
  const increment = () => {
    setCount((c) => c + 1);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+1</button>
      <h1>{name}</h1>
      <input value={name} onChange={handleChange} type="text" />
    </div>
  );
}

export default Counter;
