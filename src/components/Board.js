import React from "react";

const Board = ({ tiles, setTiles, x, setX }) => {
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
