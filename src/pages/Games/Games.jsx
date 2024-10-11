import React from "react";
import { Link } from "react-router-dom";

function Games() {
  return (
    <div className="Games">
      <div className="Gemes__menu">
        <div className="Game">
          <Link to="/launchpad">
            <div className="Game__view launchpad"></div>
          </Link>
          <p className="Game__description">launchpad</p>
        </div>
        <div className="Game">
          <Link to="/snake">
            <div className="Game__view snake"></div>
          </Link>
          <p className="Game__description">Snake</p>
        </div>
        <div className="Game">
          <Link to="/tic_tac_toe">
            <div className="Game__view tic_tac_toe"></div>
          </Link>
          <p className="Game__description">Tic tac toe</p>
        </div>
        <div className="Game">
          <Link to="/2048">
            <div className="Game__view Twenty48"></div>
          </Link>
          <p className="Game__description">2048</p>
        </div>
        <div className="Game">
          <Link to="/RememberPictures">
            <div className="Game__view RememberPictures"></div>
          </Link>
          <p className="Game__description">Remember Pictures</p>
        </div>
      </div>
    </div>
  );
}

export default Games;
