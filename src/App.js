import React, {useState} from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [value, setValue] = useState("O");
  const [player, changePlayer] = useState(0);

  return (
    <div className="container">
      <div className="row">
        <h1 className="text-center" onClick={() => {
          setValue(player === 0 ? "X": "O");
          changePlayer(player === 0 ?  1 : 0);
        }}>{value}</h1>
      </div>
    </div>
  );
}

export default App;
