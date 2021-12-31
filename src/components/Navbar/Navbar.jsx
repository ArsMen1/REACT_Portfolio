import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar__menu">
        <NavLink className={"Navbar__paragraph"} to="/ ">
          About Me
        </NavLink>
        <NavLink className={"Navbar__paragraph"} to="/games">
          Games
        </NavLink>
        <NavLink className={"Navbar__paragraph"} to="/work">
          Work examples
        </NavLink>
        <NavLink className={"Navbar__paragraph"} to="/contacts">
          Contacts
        </NavLink>
      </div>
    </div>
  );
}
export default Navbar;
