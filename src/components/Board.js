import React from "react";

const Board = ({ tiles }) => {
  return (
    <div className="board">
      {tiles.map(tile => (
        <input type="submit" className="tile" value={tile} />
      ))}
    </div>
  );
};

export default Board;
