import React, { Component } from "react";
import Card from "./Card";

export default class Game extends Component {
  componentDidMount() {
    console.log(this.props.gameData);
  }
  render() {
    const { gameData } = this.props;
    return (
      <div className="Game">
        {gameData.map((element) => (
          <Card img={element.img} />
        ))}
      </div>
    );
  }
}
