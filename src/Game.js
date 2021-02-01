import React, { Component } from "react";
import Card from "./Card";

export default class Game extends Component {
  createRandomSelection(n) {
    let indexNumbers = [];
    while (indexNumbers.length !== n * 2) {
      let randomNum = Math.floor(Math.random() * n);
      if (
        indexNumbers.indexOf(randomNum) === -1 ||
        indexNumbers.indexOf(randomNum) === indexNumbers.lastIndexOf(randomNum)
      ) {
        indexNumbers.push(randomNum);
      }
    }
    return indexNumbers;
  }
  createGame() {
    const randomData = [];
    const amount = this.props.gameData.length;
    const selection = this.createRandomSelection(amount);
    selection.forEach((index) => randomData.push(this.props.gameData[index]));
    return randomData;
  }
  render() {
    const data = this.createGame();
    return (
      <div className="Game">
        {data.map((element) => (
          <Card img={element.img} />
        ))}
      </div>
    );
  }
}
