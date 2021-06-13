import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Tile.css'

function Tile(props) {

    const [value, setValue] = useState(props.value);

    return (
        <div className="col-2 m-2 text-center fs-2 text-light tile"
            onClick={() => {
                setValue(props.player);
                props.clickFunction();
            }}>
            {value}
        </div >
    )
}

export default Tile;