import React from "react";
import DisplayNumber from "./DisplayNumber";

function DisplayNumberBox(props) {
  return (
    <div>
      <h1>Display Number Box</h1>
      <DisplayNumber numebr={props.number}></DisplayNumber>
    </div>
  );
}

export default DisplayNumberBox;
