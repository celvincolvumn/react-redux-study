import React from "react";

import AddNumberBox from "./AddNumberBox";
import DispalyNumberBox from "./DispalyNumberBox";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Wrapper</h1>
      <AddNumberBox></AddNumberBox>
      <DispalyNumberBox></DispalyNumberBox>
    </div>
  );
}

export default App;
