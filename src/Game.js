import React, { Component } from "react";

export default class Game extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.difficulty}</h1>
      </div>
    );
  }
}
