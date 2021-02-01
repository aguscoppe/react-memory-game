import React, { Component } from "react";
import Card from "./Card";
import hidden from "./img/hidden.png";
import { createGame } from "./helpers";

export default class Game extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], showing: [], displayed: [] };
    this.showImg = this.showImg.bind(this);
  }

  componentDidMount() {
    this.setState({ data: createGame(this.props.gameData) });
  }

  showImg(id) {
    this.setState({ displayed: [...this.state.displayed, id] });
    console.log(this.state.displayed);
  }
  render() {
    const cards = this.state.data.map((element) => {
      let imgData = this.state.displayed.includes(element.id)
        ? element.img
        : hidden;
      return <Card imgSrc={imgData} showImg={this.showImg} id={element.id} />;
    });
    return <div className="Game">{cards}</div>;
  }
}
