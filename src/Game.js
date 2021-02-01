import React, { Component } from "react";

export default class Game extends Component {
  componentDidMount() {
    console.log(this.props.gameData);
  }
  render() {
    return (
      <div>
        <h1>Game</h1>
      </div>
    );
  }
}
