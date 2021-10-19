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
          <Link to="/-------------------">
            <div className="Game__view"></div>
          </Link>
          <p className="Game__description">-------------------</p>
        </div>
        <div className="Game">
          <Link to="/-------------------">
            <div className="Game__view"></div>
          </Link>
          <p className="Game__description">---------------------</p>
        </div>
        <div className="Game">
          <Link to="/-------------------">
            <div className="Game__view"></div>
          </Link>
          <p className="Game__description">----------------------</p>
        </div>
        <div className="Game">
          <Link to="/-------------------">
            <div className="Game__view"></div>
          </Link>
          <p className="Game__description">---------------------</p>
        </div>
      </div>
    </div>
  );
}

export default Games;
