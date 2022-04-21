import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";

function App() {
  const [tiles, setTiles] = useState(["", "", "", "", "", "", "", "", ""]);
  const [x, setX] = useState(true);
  const [winner, setWinner] = useState("");

  return (
    <div className="App">
      <Header setTiles={setTiles} setX={setX} setWinner={setWinner} />
      <Board
        tiles={tiles}
        setTiles={setTiles}
        x={x}
        setX={setX}
        winner={winner}
        setWinner={setWinner}
      />
    </div>
  );
}

export default App;
