import React, { Component } from "react";

import AddNumberBox from "./components/AddNumberBox";
import DisplayNumberBox from "./components/DisplayNumberBox";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Wrapper</h1>
        <AddNumberBox></AddNumberBox>
        <DisplayNumberBox></DisplayNumberBox>
      </div>
    );
  }
}

export default App;
