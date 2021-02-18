import React, { useState } from "react";
import { Route } from "react-router-dom";
import ChooseDifficulty from "./ChooseDifficulty";
import Game from "./Game.js";
import gameData from "./data";
import "./App.css";

const App = () => {
  const [difficulty, setDifficulty] = useState(null);

  const changeDifficulty = (value) => {
    setDifficulty(value);
  };

  return (
    <div className="App">
      <Route path="/">
        {difficulty === null ? (
          <ChooseDifficulty changeDifficulty={changeDifficulty} />
        ) : (
          <Game gameData={gameData[difficulty]} difficulty={difficulty} />
        )}
      </Route>
    </div>
  );
};

export default App;
