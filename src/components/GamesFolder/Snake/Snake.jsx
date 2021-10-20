import React, { Component } from "react";
import Adder from "./Adder";
import Food from "./Food";

const getRandomCordinates = () => {
  let min = 1;
  let max = 96;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  return [x, y];
};

class Snake extends Component {
  state = {
    food: getRandomCordinates(),
    direction: "RIGHT",
    snakeDots: [
      [0, 0],
      [2, 0],
    ],
  };

  componentDidMount() {
    document.onkeydown = this.onKeydown;
  }

  onKeydown = (e) => {
    e = e || window.event;
    switch (e.keyCode) {
      case 38:
        this.setState({ direction: "UP" });
        break;
      case 40:
        this.setState({ direction: "DOWN" });
        break;
      case 37:
        this.setState({ direction: "LEFT" });
        break;
      case 39:
        this.setState({ direction: "RIGHT" });
        break;
    }
  };

  render() {
    return (
      <div className="game-area">
        <Adder snakeDots={this.state.snakeDots} />
        <Food dot={this.state.food} />
      </div>
    );
  }
}

export default Snake;
