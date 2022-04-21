import React, { useState, useEffect } from "react";

const Board = ({ tiles, setTiles, x, setX }) => {
  const [winner, setWinner] = useState("");

  const getIndexes = (arr, mark) => {
    const indexes = [];

    arr.forEach((tile, i) => {
      if (tile === mark) indexes.push(i);
    });

    return indexes;
  };

  const xIndexes = getIndexes(tiles, "X");
  const oIndexes = getIndexes(tiles, "O");

  const checkWin = (arr, target) => target.every(i => arr.includes(i));

  const fullfill = tiles.every(tail => tail !== "");

  useEffect(() => {
    const winIndexes = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    winIndexes.forEach(win => {
      const xWin = checkWin(xIndexes, win);
      const oWin = checkWin(oIndexes, win);

      if (xWin) setWinner("X");
      else if (oWin) setWinner("O");
      else if (fullfill && !xWin && !oWin) setWinner("draw");
    });
  }, [oIndexes, xIndexes, fullfill]);

  console.log(winner);

  const handleClick = e => {
    if (e.target.innerText !== "") return;

    const updatedTiles = [...tiles];
    const i = e.target.value;

    if (x) {
      updatedTiles[i] = "X";
      setTiles(updatedTiles);
    } else if (!x) {
      updatedTiles[i] = "O";
      setTiles(updatedTiles);
    }

    setX(!x);
  };

  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <button
          type="submit"
          className="tile"
          key={index}
          value={index}
          onClick={handleClick}
        >
          {tile}
        </button>
      ))}
    </div>
  );
};

export default Board;
