import React from "react";
import AddNumber from "./AddNumber";

function AddNumberBox(props) {
  const handleClick = (size) => {
    console.log(size);
    props.onClick(size);
  };
  return (
    <div>
      <h1>Add Number Box</h1>
      <AddNumber onClick={handleClick}></AddNumber>
    </div>
  );
}

export default AddNumberBox;
