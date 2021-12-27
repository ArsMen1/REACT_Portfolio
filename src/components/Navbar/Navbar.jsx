import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [activeItem, setActiveItem] = React.useState(1);

  const oneSelectItem = (index) => {
    setActiveItem(index);
  };

  /*Так можно?
   let url =
    window.location.href.split("/")[window.location.href.split("/").length - 1];

 if (url === "REACT_portfolio") {
    setActiveItem(1);
  } else if (url === "games") {
    setActiveItem(2);
  } else if (url === "work") {
    setActiveItem(3);
  } else if (url === "contacts") {
    setActiveItem(4);
  } else {
    setActiveItem(1);
  }*/

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
