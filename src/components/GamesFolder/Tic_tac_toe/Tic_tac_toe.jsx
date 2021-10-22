import React, { useState } from "react";
import Board from "./Board";
import { calculateWinner } from "./helper";

const Tic_tac_toe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(board);

  const handeleClick = (index) => {
    const boardCopy = [...board];
    //Был ли клик по ячейке
    if (winner || boardCopy[index]) return;
    //чей ход
    boardCopy[index] = xIsNext ? "X" : "O";
    //обновить счет
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const startNewGame = () => {
    return (
      <button
        className="start__btn"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Очистить поле
      </button>
    );
  };

  return (
    <div className="wrapper_tic_tac_toe">
      {startNewGame()}
      <Board
        squares={board}
        click={handeleClick}
        winnerValue={winner ? winner[0] : null}
      />
      <p className="game__info">
        {winner
          ? "Победитель " + winner[1]
          : "Сейчас ходит " + (xIsNext ? "X" : "O")}
      </p>
    </div>
  );
};

export default Tic_tac_toe;
