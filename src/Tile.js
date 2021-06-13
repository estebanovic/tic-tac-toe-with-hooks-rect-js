import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './Tile.css'

function Tile(props) {

    const [value, setValue] = useState(props.value);

    return (
        <div className={"col-2 text-center tile " + props.position}
            onClick={() => {
                props.onClickTile();
            }}>
            {props.value}
        </div >
    )
}

export default Tile;