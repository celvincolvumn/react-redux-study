import React, { Component } from "react";
import DisplayNumber from "../containers/DisplayNumber";

class DisplayNumberBox extends Component {
  render() {
    return (
      <div>
        <h1>Display Number Box</h1>
        <DisplayNumber unit="kg"></DisplayNumber>
      </div>
    );
  }
}

export default DisplayNumberBox;
