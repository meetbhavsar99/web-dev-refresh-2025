import { useState } from "react";

export default function Scorekeeper({ numOfPlayers = 2, target = 5 }) {
  const [score, setScore] = useState(new Array(numOfPlayers).fill(0));

  //   function addOne(idx) {
  //     setScore((prevScore) => {
  //       const copy = [...prevScore];
  //       copy[idx] += 1;
  //       return copy;
  //     });
  //   }
  function addOne(idx) {
    setScore((prevScore) => {
      return prevScore.map((score, i) => {
        if (idx === i) return score + 1;
        return score;
      });
    });
  }

  const resetScores = () => {
    setScore(new Array(numOfPlayers).fill(0));
  };

  return (
    <div>
      <h1>ScoreKeeper</h1>
      <ul>
        {score.map((item, index) => {
          return (
            <li>
              Player{index + 1}: {item}{" "}
              <button onClick={() => addOne(index)}>+1</button>
              {item >= target && "WINNER!"}
            </li>
          );
        })}
      </ul>
      <button onClick={resetScores}>Reset</button>
    </div>
  );
}
