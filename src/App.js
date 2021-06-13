import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Tile from './Tile';
import Alert from './Alert';

function App() {

  const [player, changePlayer] = useState("X");
  const [tiles, changeTiles] = useState(["-", "-", "-", "-", "-", "-", "-", "-", "-"]);
  const [message, setMessage] = useState(null);
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
      setMessage(player + " ha ganado");
    } else if (topRow === "XXX" || topRow === "OOO") {
      win(player);
      setMessage(player + " ha ganado");
    } else if (middleRow === "XXX" || middleRow === "OOO") {
      win(player);
      setMessage(player + " ha ganado");
    } else if (bottomRow === "XXX" || bottomRow === "OOO") {
      win(player);
      setMessage(player + " ha ganado");
    } else if (leftColumn === "XXX" || leftColumn === "OOO") {
      win(player);
      setMessage(player + " ha ganado");
    } else if (middleColumn === "XXX" || middleColumn === "OOO") {
      win(player);
      setMessage(player + " ha ganado");
    } else if (rightColumn === "XXX" || rightColumn === "OOO") {
      win(player);
      setMessage(player + " ha ganado");
    } else if (diagonalTop === "XXX" || diagonalTop === "OOO") {
      win(player);
      setMessage(player + " ha ganado");
    } else if (diagonalBottom === "XXX" || diagonalBottom === "OOO") {
      win(player);
      setMessage(player + " ha ganado");
    }
  }

  function onClickTile(num) {

    console.log(tiles[num] )
    if(tiles[num] === "-"){  
      changePlayer(player === "X" ? "O" : "X");
      tiles[num] = player;
    }

    if(winner === null){
      checkIfWon();
    }
  }

  return (
    <div className="container">
      <div>
        <h1 className="text-center">Tic - Tac - Toe</h1>
      </div>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 py-3">
          {!!winner &&
            (
              <Alert className={"alert-secondary"} text={message}/>
            )
          }
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={tiles[0]} onClickTile={() => onClickTile(0)} player={player} />
        <Tile value={tiles[1]} onClickTile={() => onClickTile(1)} player={player} position={"top"} />
        <Tile value={tiles[2]} onClickTile={() => onClickTile(2)} player={player} />
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={tiles[3]} onClickTile={() => onClickTile(3)} player={player} position={"left"} />
        <Tile value={tiles[4]} onClickTile={() => onClickTile(4)} player={player} position={"middle"} />
        <Tile value={tiles[5]} onClickTile={() => onClickTile(5)} player={player} position={"right"} />
      </div>

      <div className="row d-flex justify-content-center">
        <Tile value={tiles[6]} onClickTile={() => onClickTile(6)} player={player} />
        <Tile value={tiles[7]} onClickTile={() => onClickTile(7)} player={player} position={"bottom"} />
        <Tile value={tiles[8]} onClickTile={() => onClickTile(8)} player={player} />
      </div>
    </div>
  );
}

export default App;
