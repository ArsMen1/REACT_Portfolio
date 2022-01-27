import React from "react";
import Square from "../Square/Square";

const Board = ({ squares, click, winnerValue }) => {
  let winnerValues = winnerValue === null ? 0 : winnerValue;
  return (
    <div className="board_tic_tac_toe">
      {squares.map((square, i) => (
        <Square
          key={i}
          index={i}
          value={square}
          winnerValues={winnerValues}
          onClick={() => click(i)}
        />
      ))}
    </div>
  );
};

export default Board;
