import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import { useState } from "react";
export default function FormDemo() {
  const [name, setName] = useState("");
  const [value, setValue] = useState(30);
  const updateName = (e) => {
    setName(e.target.value);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <h2>{name}</h2>
      <TextField
        placeholder="Bels"
        id="outlined-basic"
        label="Her"
        variant="outlined"
        value={name}
        onChange={updateName}
      />
      <p>Volume: {value}</p>
      <Slider aria-label="Volume" value={value} onChange={handleChange} />
    </div>
  );
}
