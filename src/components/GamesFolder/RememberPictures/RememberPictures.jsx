import React from "react";

import IconFlip from "./img/repeat.png";

import IconCard1 from "./img/building.png";
import IconCard2 from "./img/sculpture (1).png";
import IconCard3 from "./img/sculpture (2).png";
import IconCard4 from "./img/sculpture (3).png";
import IconCard5 from "./img/sculpture (4).png";
import IconCard6 from "./img/sculpture (5).png";
import IconCard7 from "./img/sculpture.png";
import IconCard8 from "./img/vase.png";

const initialCards = [
  { id: 1, img: IconCard1 },
  { id: 2, img: IconCard2 },
  { id: 3, img: IconCard3 },
  { id: 4, img: IconCard4 },
  { id: 5, img: IconCard5 },
  { id: 6, img: IconCard6 },
  { id: 7, img: IconCard7 },
  { id: 8, img: IconCard8 },
];

const RememberPictures = () => {
  const [arrayCards, setArrayCards] = React.useState([]);
  const [openCards, setOpenCards] = React.useState([]);
  const [matched, setMatched] = React.useState([]);
  const [moves, setMoves] = React.useState([]);

  const shuffle = (array) => {
    let currenyIndex = array.length,
      temporaryValue,
      randomIndex;

    while (currenyIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currenyIndex);
      currenyIndex -= 1;

      temporaryValue = array[currenyIndex];
      array[currenyIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  };

  React.useEffect(() => {
    setArrayCards(shuffle([...initialCards, ...initialCards]));
  }, []);

  const flipCard = (index) => () => {
    setOpenCards((opened) => [...opened, index]);
  };

  React.useEffect(() => {
    if (openCards.length > 2) {
      setOpenCards([]);
    }

    const firstMatched = arrayCards[openCards[0]];
    const secondMatched = arrayCards[openCards[1]] !== arrayCards[openCards[0]];
    if (secondMatched) {
      setMoves((prevMove) => +prevMove + 1);
    }

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openCards.length === 2) setTimeout(() => setOpenCards([]), 1000);
  }, [openCards]);

  const gameRestart = () => {
    setArrayCards(shuffle([...initialCards, ...initialCards]));
    setOpenCards([]);
    setMatched([]);
    setMoves(0);
  };

  return (
    <div className="wrapper_RememberPictures">
      <div className="RememberPictures">
        <p className="number-of-strokes">Made moves: {moves}</p>
        <div className="cards">
          {arrayCards.map((item, index) => {
            let isFlippe = false;

            if (openCards.includes(index)) isFlippe = true; //переворачивает карточку
            if (matched.includes(item.id)) isFlippe = true; //Если карточки совпадают, не переворачивает обратно

            return (
              <div
                key={index}
                className={`card ${isFlippe ? "flipped" : ""}`}
                onClick={flipCard(index)}
              >
                <div className="inner">
                  <div className="front">
                    <img src={item.img} width="100" />
                  </div>
                  <div className="back">
                    <img src={IconFlip} width="100" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <button className="btnRestart" onClick={gameRestart}>
          Again
        </button>
      </div>
    </div>
  );
};

export default RememberPictures;
