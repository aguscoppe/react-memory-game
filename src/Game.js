import React, { Component } from "react";
import Card from "./Card";
import hidden from "./img/hidden.png";
import { createGame } from "./helpers";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      showing: [],
      currentNumA: null,
      currentNumB: null,
      correct: [],
    };
    this.updateGame = this.updateGame.bind(this);
  }

  componentDidMount() {
    this.setState({ data: createGame(this.props.gameData) });
  }

  // adds matching cards to correct state and resets state values
  componentDidUpdate() {
    if (
      this.state.currentNumA !== null &&
      this.state.currentNumA === this.state.currentNumB
    ) {
      this.setState({
        correct: [...this.state.correct, this.state.currentNumA],
        currentNumA: null,
        currentNumB: null,
        showing: [],
      });
    }
  }

  updateGame(id, number) {
    // prevents correct cards to be clicked
    if (!this.state.correct.includes(number)) {
      // prevents the same card id to be in "showing" twice + prevents showing more than two cards at once
      if (!this.state.showing.includes(id) && this.state.currentNumB === null) {
        this.setState({ showing: [...this.state.showing, id] });
      }
      // sets currentNumB to new number only if the same card hasn't been clicked twice
      if (this.state.currentNumA === null) {
        this.setState({ currentNumA: number });
      } else if (!this.state.showing.includes(id)) {
        this.setState({ currentNumB: number });
        if (this.state.showing.length === 1) {
          this.resetValues();
        }
      }
    }
  }

  resetValues() {
    setTimeout(() => {
      this.setState({ showing: [], currentNumA: null, currentNumB: null });
    }, 1000);
  }

  render() {
    const cards = this.state.data.map((element) => {
      let imgData =
        this.state.showing.includes(element.id) ||
        this.state.correct.includes(element.number)
          ? element.img
          : hidden;
      return (
        <Card
          imgSrc={imgData}
          updateGame={this.updateGame}
          id={element.id}
          number={element.number}
          key={element.id}
        />
      );
    });
    return <div className="Game">{cards}</div>;
  }
}
