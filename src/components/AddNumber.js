import React, { useState } from "react";

function AddNumber(props) {
  const [size, setSize] = useState(1);

  function handleChange(e) {
    setSize(e.target.value);
  }

  function handleClick(e) {
    props.onClick(size);
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
