import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const ChooseDifficulty = (props) => {
  const [value, setValue] = useState("easy");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.changeDifficulty(value);
  };

  return (
    <div className="ChooseDifficulty">
      <h1>Memory game</h1>
      <form onSubmit={handleSubmit}>
        <span>Choose difficulty: </span>
        <select value={value} onChange={handleChange}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <div>
          <button>Start</button>
        </div>
      </form>
    </div>
  );
};

export default withRouter(ChooseDifficulty);
