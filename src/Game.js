import React, { useState, useEffect } from "react";
import Card from "./Card";
import hidden from "./img/hidden.png";
import { createGame } from "./helpers";

const Game = (props) => {
  const [data, setData] = useState([]);
  const [showing, setShowing] = useState([]);
  const [currentNumA, setCurrentNumA] = useState(null);
  const [currentNumB, setCurrentNumB] = useState(null);
  const [correct, setCorrect] = useState([]);

  useEffect(() => {
    setData(createGame(props.gameData));
  }, [props.gameData]);

  // adds matching cards to correct state and resets state values
  useEffect(() => {
    if (currentNumA !== null && currentNumA === currentNumB) {
      setCorrect([...correct, currentNumA]);
      setCurrentNumA(null);
      setCurrentNumB(null);
      setShowing([]);
    }
  }, [currentNumA, currentNumB, correct]);

  const updateGame = (id, number) => {
    // prevents correct cards to be clicked
    if (!correct.includes(number)) {
      // prevents the same card id to be in "showing" twice + prevents showing more than two cards at once
      if (!showing.includes(id) && currentNumB === null) {
        setShowing([...showing, id]);
      }
      // sets currentNumB to new number only if the same card hasn't been clicked twice
      if (currentNumA === null) {
        setCurrentNumA(number);
      } else if (!showing.includes(id)) {
        setCurrentNumB(number);
        if (showing.length === 1) {
          resetValues();
        }
      }
    }
  };

  const resetValues = () => {
    setTimeout(() => {
      setShowing([]);
      setCurrentNumA(null);
      setCurrentNumB(null);
    }, 1000);
  };

  const cards = data.map((element) => {
    let imgData =
      showing.includes(element.id) || correct.includes(element.number)
        ? element.img
        : hidden;
    return (
      <Card
        imgSrc={imgData}
        updateGame={updateGame}
        id={element.id}
        number={element.number}
        key={element.id}
      />
    );
  });
  return <div className={`Game ${props.difficulty}`}>{cards}</div>;
};

export default Game;
