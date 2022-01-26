import React from "react";

const Square = (props) => {
  let classNameS =
    props.index === props.winnerValues[0]
      ? "square_tic_tac_toe active"
      : props.index === props.winnerValues[1]
      ? "square_tic_tac_toe active"
      : props.index === props.winnerValues[2]
      ? "square_tic_tac_toe active"
      : "square_tic_tac_toe";

  return (
    <button className={classNameS} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Square;
