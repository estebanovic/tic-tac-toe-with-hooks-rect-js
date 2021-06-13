import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tile from './Tile';

function App() {

  const [player, changePlayer] = useState("X");

  return (
    <div className="container">
      <div>
        <h1 className="text-center">Tic - Tac - Toe</h1>
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"} clickFunction={() => changePlayer(player === "X" ? "O" : "X")} player={player} />
        <Tile value={"-"} clickFunction={() => changePlayer(player === "X" ? "O" : "X")} player={player} />
        <Tile value={"-"} clickFunction={() => changePlayer(player === "X" ? "O" : "X")} player={player} />
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"} clickFunction={() => changePlayer(player === "X" ? "O" : "X")} player={player} />
        <Tile value={"-"} clickFunction={() => changePlayer(player === "X" ? "O" : "X")} player={player} />
        <Tile value={"-"} clickFunction={() => changePlayer(player === "X" ? "O" : "X")} player={player} />
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"} clickFunction={() => changePlayer(player === "X" ? "O" : "X")} player={player} />
        <Tile value={"-"} clickFunction={() => changePlayer(player === "X" ? "O" : "X")} player={player} />
        <Tile value={"-"} clickFunction={() => changePlayer(player === "X" ? "O" : "X")} player={player} />
      </div>
    </div>
  );
}

export default App;
