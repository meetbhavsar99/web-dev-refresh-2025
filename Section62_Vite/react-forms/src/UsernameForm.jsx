import { useState } from "react";
function UsernameForm() {
  const [username, setUsername] = useState("Bella");
  const updateUsername = (evt) => {
    console.log(evt);
    setUsername(evt.target.value);
  };
  return (
    <div>
      <label htmlFor="username">Enter the username</label>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={updateUsername}
        id="username"
      />
      <button>Submit</button>
    </div>
  );
}

export default UsernameForm;
