import React, { Component } from "react";
import { Route } from "react-router-dom";
import ChooseDifficulty from "./ChooseDifficulty";
import Game from "./Game.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = { difficulty: null };
    this.changeDifficulty = this.changeDifficulty.bind(this);
  }
  changeDifficulty(value) {
    this.setState({ difficulty: value });
  }
  render() {
    return (
      <div className="App">
        <Route path="/">
          {this.state.difficulty === null ? (
            <ChooseDifficulty changeDifficulty={this.changeDifficulty} />
          ) : (
            <Game difficulty={this.state.difficulty} />
          )}
        </Route>
      </div>
    );
  }
}

export default App;
