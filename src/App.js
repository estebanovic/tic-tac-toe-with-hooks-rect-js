import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tile from './Tile';

function App() {

  const [player, changePlayer] = useState("X");
  const [tiles, changeTiles] = useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);


  return (
    <div className="container">
      <div>
        <h1 className="text-center">Tic - Tac - Toe</h1>
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"} onCLickPlayer={() => changePlayer(player === "X" ? "O" : "X")} onClickTile={() => changeTiles([player, tiles[1], tiles[2], tiles[3], tiles[4], tiles[5], tiles[6], tiles[7], tiles[8]])} player={player}/>
        <Tile value={"-"} onCLickPlayer={() => changePlayer(player === "X" ? "O" : "X")} onClickTile={() => changeTiles([tiles[0], player, tiles[2], tiles[3], tiles[4], tiles[5], tiles[6], tiles[7], tiles[8]])} player={player}/>
        <Tile value={"-"} onCLickPlayer={() => changePlayer(player === "X" ? "O" : "X")} onClickTile={() => changeTiles([tiles[0], tiles[1], player, tiles[3], tiles[4], tiles[5], tiles[6], tiles[7], tiles[8]])} player={player}/>
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"} onCLickPlayer={() => changePlayer(player === "X" ? "O" : "X")} onClickTile={() => changeTiles([tiles[0], tiles[1], tiles[2], player, tiles[4], tiles[5], tiles[6], tiles[7], tiles[8]])} player={player}/>
        <Tile value={"-"} onCLickPlayer={() => changePlayer(player === "X" ? "O" : "X")} onClickTile={() => changeTiles([tiles[0], tiles[1], tiles[2], tiles[3], player, tiles[5], tiles[6], tiles[7], tiles[8]])} player={player}/>
        <Tile value={"-"} onCLickPlayer={() => changePlayer(player === "X" ? "O" : "X")} onClickTile={() => changeTiles([tiles[0], tiles[1], tiles[2], tiles[3], tiles[4], player, tiles[6], tiles[7], tiles[8]])} player={player}/>
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"} onCLickPlayer={() => changePlayer(player === "X" ? "O" : "X")} onClickTile={() => changeTiles([tiles[0], tiles[1], tiles[2], tiles[3], tiles[4], tiles[5], player, tiles[7], tiles[8]])} player={player}/>
        <Tile value={"-"} onCLickPlayer={() => changePlayer(player === "X" ? "O" : "X")} onClickTile={() => changeTiles([tiles[0], tiles[1], tiles[2], tiles[3], tiles[4], tiles[5], tiles[6], player, tiles[8]])} player={player}/>
        <Tile value={"-"} onCLickPlayer={() => changePlayer(player === "X" ? "O" : "X")} onClickTile={() => changeTiles([tiles[0], tiles[1], tiles[2], tiles[3], tiles[4], tiles[5], tiles[6], tiles[7], player])} player={player}/>
      </div>
    </div>
  );
}

export default App;
