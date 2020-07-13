import React, { useState } from "react";
import store from "../store/store";

function AddNumber(props) {
  const [size, setSize] = useState(1);

  function handleChange(e) {
    setSize(e.target.value + size);
  }

  function handleClick(e) {
    store.dispatch({ type: "INCREMENT", size });
  }

  return (
    <div>
      <h1>Add Number</h1>
      <input type="button" value="+" onClick={handleClick}></input>
      <input type="text" value={size} onChange={handleChange}></input>
    </div>
  );
}

export default AddNumber;
