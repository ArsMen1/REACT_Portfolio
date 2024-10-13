import React, { useCallback, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { setStartGame } from "../../redux/actions/menu";
import { connect, useDispatch, useSelector } from "react-redux";

const pages = ["/", "/snake", "/leaderBoard", "/contacts"];

const Navbar = () => {
  const dispatch = useDispatch();
  const keydownHandler = useRef(null);
  const game = useSelector((state) => state.menu.game);
  const history = useHistory();
  const [menu, setMenu] = useState(0);

  // const handleButtonClick = useCallback(() => {
  //   setMenu(menu + 1);
  // }, [counter]);

  // useEffect(() => {
  //   // fetch("your-api-endpoint")
  //   //   .then((response) => response.json())
  //   //   .then((menu) => setData(menu));
  //   document.onkeydown = onKeydown;
  // }, [menu]); // Использование пустого массива [] гарантирует выполнение этого эффекта только один раз

  const onSelectStartGame = useCallback(() => {
    dispatch(setStartGame());
  }, []);

  useEffect(() => {
    setMenu(pages.indexOf(history.location.pathname));

    keydownHandler.current = (e) => {
      // e = e || window.event;
      switch (e.keyCode) {
        case 27:
          onSelectStartGame();
          break;
        case 38:
          if (!game && menu > 0) {
            setMenu(menu - 1);
          }
          break;
        case 40:
          if (!game && menu < 3) {
            setMenu(menu + 1);
          }
          break;
        default:
          console.log("Default case");
      }
      // if (event.key === "Escape") {
      //   alert("Escape pressed!");
      // }
    };

    document.addEventListener("keydown", keydownHandler.current);
    return () => {
      document.removeEventListener("keydown", keydownHandler.current);
    };
  }, [game, menu]);

  // console.log(menu);
  // setMenu(menu);
  history.push(pages[menu]);

  return (
    <div className="Navbar">
      <div className="Navbar__menu">
        <NavLink className={"Navbar__paragraph"} to="/" exact>
          About Game
        </NavLink>
        {/* <NavLink className={"Navbar__paragraph"} to="/games" exact> */}
        <NavLink className={"Navbar__paragraph"} to="/snake" exact>
          Game(login)
        </NavLink>
        <NavLink className={"Navbar__paragraph"} to="/leaderBoard" exact>
          LeaderBoard
        </NavLink>
        <NavLink className={"Navbar__paragraph"} to="/contacts" exact>
          Contacts
        </NavLink>
      </div>
    </div>
  );
};

// export default Navbar;

const mapStateToProps = (state) => ({
  game: state.game,
});

const mapDispatchToProps = {
  setStartGame: () => ({ type: "START_GAME" }),
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
