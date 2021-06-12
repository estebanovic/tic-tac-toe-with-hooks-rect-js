import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tile from './Tile';

function App() {

  const [player, changePlayer] = useState(0);

  return (
    <div className="container">
      <div>
        <h1 className="text-center">Tic - Tac - Toe</h1>
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"} onClick={() => changePlayer(player === 0 ? 1 : 0)}/>
        <Tile value={"-"} onClick={() => changePlayer(player === 0 ? 1 : 0)}/>
        <Tile value={"-"} onClick={() => changePlayer(player === 0 ? 1 : 0)}/>
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"}/>
        <Tile value={"-"}/>
        <Tile value={"-"}/>
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"}/>
        <Tile value={"-"}/>
        <Tile value={"-"}/>
      </div>
    </div>
  );
}

export default App;
