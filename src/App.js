import React from "react";
import "./styles.css";
import { Button } from '@material-ui/core';
export default function App() {
  return (
    <div className="App">
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" disabled>
        Disabled
      </Button>
      <Button variant="contained" color="primary" href="#contained-buttons">
        Link
      </Button>


    </div>
  );
}
