import React, { Component } from "react";
import Adder from "./Adder";
import Food from "./Food";

const getRandomCordinates = () => {
  let min = 1;
  let max = 96;
  let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
  let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 4;
  return [x, y];
};

class Snake extends Component {
  state = {
    food: getRandomCordinates(),
    speed: 200, //устанавливаем скорость
    direction: "RIGHT",
    snakeDots: [
      [0, 0],
      [2, 0], //начальное положние змейки
    ],
  };

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed);
    document.onkeydown = this.onKeydown;
  }

  componentDidUpdate() {
    this.checkIfEat();
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

  moveSnake = () => {
    let dots = [...this.state.snakeDots];
    let head = dots[dots.length - 1];

    switch (this.state.direction) {
      case "RIGHT":
        head = [head[0] + 2, head[1]];
        break;
      case "LEFT":
        head = [head[0] - 2, head[1]];
        break;
      case "DOWN":
        head = [head[0], head[1] + 4];
        break;
      case "UP":
        head = [head[0], head[1] - 4];
        break;
    }
    dots.push(head);
    dots.shift();
    this.setState({
      snakeDots: dots,
    });
  };

  checkIfEat() {
    let head = this.state.snakeDots[this.state.snakeDots.length - 1];
    let food = this.state.food;
    if (head[0] === food[0] && head[1] === food[1]) {
      this.setState({
        food: getRandomCordinates(),
      });
      this.enlargeSnake();
      this.increaseSpeed();
    }
  }

  enlargeSnake() {
    let newSnake = [...this.state.snakeDots];
    newSnake.unshift([]);
    this.setState({
      snakeDots: newSnake,
    });
  }

  increaseSpeed() {
    if (this.state.speed > 10) {
      this.setState({
        speed: this.state.speed - 10,
      });
    }
  }

  render() {
    return (
      <div>
        <p className="title">snakePro || Rules are made to be broken</p>
        <div className="game-area">
          <Adder snakeDots={this.state.snakeDots} />
          <Food dot={this.state.food} />
        </div>
      </div>
    );
  }
}

export default Snake;
