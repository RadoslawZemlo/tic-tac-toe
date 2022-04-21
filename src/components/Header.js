import React from "react";

const Header = ({ setTiles, x, setX, setWinner }) => {
  const restart = () => {
    setTiles(["", "", "", "", "", "", "", "", ""]);
    setX(true);
    setWinner("");
  };

  return (
    <header>
      <h1>Tic Tac Toe</h1>
      <input type="submit" value="restart" onClick={restart} />
      <p>Turn: {x ? "X" : "O"}</p>
    </header>
  );
};

export default Header;
