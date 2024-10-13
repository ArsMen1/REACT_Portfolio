import React from "react";

function LeaderBoard() {
  const leaderObj = [
    { name: "Иванов", score: "1000" },
    { name: "Петров", score: "900" },
    { name: "Сидоров", score: "800" },
    { name: "Иванов1", score: "700" },
    { name: "Петров2", score: "600" },
    { name: "Сидоров1", score: "500" },
    { name: "Иванов2", score: "400" },
    { name: "Петров3", score: "300" },
    { name: "Сидоров2", score: "200" },
    { name: "Сидоров3", score: "100" },
    { name: "Сидоров4", score: "00" },
  ];

  // const [leaderObj, setLeaderObj] = useState(null);

  // Загрузка данных при первом отображении компонента
  // useEffect(() => {
  //   fetch("your-api-endpoint")
  //     .then((response) => response.json())
  //     .then((leaderObj) => setData(leaderObj));
  // }, []); // Использование пустого массива [] гарантирует выполнение этого эффекта только один раз

  return (
    <div className="LeaderBoard">
      <div>
        <h2>Лидеры прошлой недели</h2>
        <div className={"LeaderBoard__table"}>
          {leaderObj.map((el, index) => (
            <li className={"LeaderBoard__table__item"} key={index}>
              {el.name}:{el.score}
            </li>
          ))}
        </div>
      </div>
      <div className={"LeaderBoard__table"}>
        <div>
          <h2>Лидеры этой недели</h2>
          {leaderObj.map((el, index) => (
            <li className={"LeaderBoard__table__item"} key={index}>
              {el.name}:{el.score}
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
