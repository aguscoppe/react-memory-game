import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.updateGame(this.props.id, this.props.number);
  }
  render() {
    return (
      <div className="Card" onClick={this.handleClick}>
        <img src={this.props.imgSrc} />
      </div>
    );
  }
}
