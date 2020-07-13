import React, { useState } from "react";

import AddNumberBox from "./components/AddNumberBox";
import DispalyNumberBox from "./components/DispalyNumberBox";

import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  const handelClick = (size) => {
    setNumber(number + size);
  };

  return (
    <div className="App">
      <h1>Wrapper</h1>
      <AddNumberBox onClick={handelClick}></AddNumberBox>
      <DispalyNumberBox number={number}></DispalyNumberBox>
    </div>
  );
}

export default App;
