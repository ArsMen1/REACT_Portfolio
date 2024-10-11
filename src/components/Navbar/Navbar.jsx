import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__menu">
        <NavLink className={"Navbar__paragraph"} to="/" exact>
          About Game
        </NavLink>
        <NavLink className={"Navbar__paragraph"} to="/games" exact>
          Games
        </NavLink>
        <NavLink className={"Navbar__paragraph"} to="/work" exact>
          Work examples
        </NavLink>
        <NavLink className={"Navbar__paragraph"} to="/contacts" exact>
          Contacts
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
