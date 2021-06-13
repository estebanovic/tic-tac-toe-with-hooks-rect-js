import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tile from './Tile';

function App() {

  const [player, changePlayer] = useState("X");
  const [tiles, changeTiles] = useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  const [winner, win] = useState(null);

  function checkIfWon() {
    let topRow = tiles[0] + tiles[1] + tiles[2];
    let middleRow = tiles[3] + tiles[4] + tiles[5];
    let bottomRow = tiles[6] + tiles[7] + tiles[8];
    let leftColumn = tiles[0] + tiles[3] + tiles[6];
    let middleColumn = tiles[1] + tiles[4] + tiles[7];
    let rightColumn = tiles[2] + tiles[5] + tiles[8];
    let diagonalTop = tiles[0] + tiles[4] + tiles[8];
    let diagonalBottom = tiles[6] + tiles[4] + tiles[2];
    if (topRow === "XXX" || topRow === "OOO") {
      win(player);
      console.log(player + " has won");
    } else if (topRow === "XXX" || topRow === "OOO") {
      win(player);
      console.log(player + " has won");
    } else if (middleRow === "XXX" || middleRow === "OOO") {
      win(player);
      console.log(player + " has won");
    } else if (bottomRow === "XXX" || bottomRow === "OOO") {
      win(player);
      console.log(player + " has won");
    } else if (leftColumn === "XXX" || leftColumn === "OOO") {
      win(player);      
      console.log(player + " has won");
    } else if (middleColumn === "XXX" || middleColumn === "OOO") {
      win(player);
      console.log(player + " has won");
    } else if (rightColumn === "XXX" || rightColumn === "OOO") {
      win(player);
      console.log(player + " has won");
    } else if (diagonalTop === "XXX" || diagonalTop === "OOO") {
      win(player);
      console.log(player + " has won");
    } else if (diagonalBottom === "XXX" || diagonalBottom === "OOO") {

    }
  }

  function onClickTile(num) {
    changePlayer(player === "X" ? "O" : "X");
    tiles[num] = player;
    checkIfWon();
  }

  return (
    <div className="container">
      <div>
        <h1 className="text-center">Tic - Tac - Toe</h1>
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"} onClickTile={() => onClickTile(0)} player={player} />
        <Tile value={"-"} onClickTile={() => onClickTile(1)} player={player} position={"top"}/>
        <Tile value={"-"} onClickTile={() => onClickTile(2)} player={player} />
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"} onClickTile={() => onClickTile(3)} player={player} position={"left"}/>
        <Tile value={"-"} onClickTile={() => onClickTile(4)} player={player} position={"middle"}/>
        <Tile value={"-"} onClickTile={() => onClickTile(5)} player={player} position={"right"}/>
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={"-"} onClickTile={() => onClickTile(6)} player={player} />
        <Tile value={"-"} onClickTile={() => onClickTile(7)} player={player} position={"bottom"}/>
        <Tile value={"-"} onClickTile={() => onClickTile(8)} player={player} />
      </div>
    </div>
  );
}

export default App;
