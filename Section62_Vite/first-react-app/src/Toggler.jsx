import { useState } from "react";
import "./Toggler.css";

export default function Toggler() {
  const [face, setFace] = useState(true);
  const toggleFace = () => setFace(!face);
  return (
    <h1 className="Toggler" onClick={toggleFace}>
      {face ? "😊" : "☹️"}
    </h1>
  );
}
