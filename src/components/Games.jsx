import React from "react";
import { Link } from "react-router-dom";
import { Launchpad, Snake } from "./GamesFolder";

function Games() {
  return (
    <div className="Games">
      <div className="Gemes__menu">
        <div className="Game">
          <Link to="/snake">
            <div className="Game__view snake"></div>
          </Link>
          <p className="Game__description">Snake</p>
        </div>
        <div className="Game">
          <Link to="/launchpad">
            <div className="Game__view launchpad"></div>
          </Link>
          <p className="Game__description">launchpad</p>
        </div>
        <div className="Game">
          <Link to="/tic_tac_toe">
            <div className="Game__view tic_tac_toe"></div>
          </Link>
          <p className="Game__description">Tic tac toe</p>
        </div>
        <div className="Game">
          <Link to="/aimTraining">
            <div className="Game__view aimTraining"></div>
          </Link>
          <p className="Game__description">Aim Training</p>
        </div>
      </div>
    </div>
  );
}

export default Games;
