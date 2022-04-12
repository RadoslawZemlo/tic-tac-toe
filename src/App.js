import { useState } from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
  const [tiles, setTiles] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tic Tac Toe</h1>
      </header>
      <Board tiles={tiles} />
    </div>
  );
}

export default App;
