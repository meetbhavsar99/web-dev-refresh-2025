import "./App.css";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import AlarmIcon from "@mui/icons-material/Alarm";
import RatingDemo from "./RatingDemo";
import FormDemo from "./FormDemo";
import NavBar from "./Navbar";

function App() {
  return (
    <>
      <div>
        {/* <Button variant="contained" onClick={() => alert("Hi!!")}>
          Contained
        </Button>
        <Button variant="text">Contained</Button>
        <Button variant="outlined">Contained</Button>
        <Button
          color="success"
          variant="contained"
          onClick={() => alert("Hi!!")}
        >
          Contained
        </Button>
        <Button color="error" variant="contained" onClick={() => alert("Hi!!")}>
          Contained
        </Button>
        <Button
          color="warning"
          variant="contained"
          onClick={() => alert("Hi!!")}
        >
          Contained
        </Button>
        <Button
          color="secondary"
          size="small"
          variant="contained"
          onClick={() => alert("Hi!!")}
        >
          Contained
        </Button>

        <IconButton color="secondary" aria-label="add an alarm">
          <AlarmIcon />
        </IconButton> */}

        {/* <RatingDemo /> */}

        <NavBar />
        <FormDemo />
      </div>
    </>
  );
}

export default App;
