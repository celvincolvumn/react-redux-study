import React, { Component } from "react";

class AddNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1,
    };
  }

  render() {
    return (
      <div>
        <h1>Add Number</h1>
        <input
          type="button"
          value="+"
          onClick={(e) => {
            this.props.onClick(this.state.size);
          }}
        ></input>
        <input
          type="text"
          value={this.state.size}
          onChange={(e) => {
            this.setState({ size: Number(e.target.value) });
          }}
        ></input>
      </div>
    );
  }
}

export default AddNumber;
