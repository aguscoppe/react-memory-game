import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ChooseDifficulty extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "medium" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.changeDifficulty(this.state.value);
  }
  render() {
    return (
      <div className="ChooseDifficulty">
        <h1>Memory game</h1>
        <form onSubmit={this.handleSubmit}>
          <span>Choose difficulty: </span>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="easy">Easy</option>
            <option defaultValue value="medium">
              Medium
            </option>
            <option value="hard">Hard</option>
          </select>
          <div>
            <button>Start</button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(ChooseDifficulty);
