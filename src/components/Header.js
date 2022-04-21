import React from "react";

const Header = ({ setTiles, setX, setWinner }) => {
  const restart = () => {
    setTiles(["", "", "", "", "", "", "", "", ""]);
    setX(true);
    setWinner("");
  };

  return (
    <header>
      <h1>Tic Tac Toe</h1>
      <input type="submit" value="restart" onClick={restart} />
    </header>
  );
};

export default Header;
