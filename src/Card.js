import React, { Component } from "react";

export default class Card extends Component {
  render() {
    return (
      <div className="Card">
        <img src={this.props.img} />
      </div>
    );
  }
}
