import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeItem, setActiveItem] = React.useState(1);

  const oneSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <div className="Navbar">
      <div className="Navbar__menu">
        <Link to="/">
          <div
            className={
              activeItem === 1
                ? "Navbar__paragraph active"
                : "Navbar__paragraph"
            }
            onClick={() => oneSelectItem(1)}
          >
            About Me
          </div>
        </Link>
        <Link to="/games">
          <div
            className={
              activeItem === 2
                ? "Navbar__paragraph active"
                : "Navbar__paragraph"
            }
            onClick={() => oneSelectItem(2)}
          >
            Games
          </div>
        </Link>
        <Link to="/work">
          <div
            className={
              activeItem === 3
                ? "Navbar__paragraph active"
                : "Navbar__paragraph"
            }
            onClick={() => oneSelectItem(3)}
          >
            Work examples
          </div>
        </Link>
        <Link to="/contacts">
          <div
            className={
              activeItem === 4
                ? "Navbar__paragraph active"
                : "Navbar__paragraph"
            }
            onClick={() => oneSelectItem(4)}
          >
            Contacts
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
