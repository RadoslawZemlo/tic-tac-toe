import React from "react";

const GameOver = ({ winner }) => {
  return (
    <div className="game-over">
      <h3>Game Over</h3>
      <p>{winner === "draw" ? "Draw" : `${winner} win!!!`}</p>
    </div>
  );
};

export default GameOver;
