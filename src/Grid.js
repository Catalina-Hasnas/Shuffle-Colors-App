import React, {useContext} from 'react';
import Square from './Square'
import AppContext from './context/AppContext';
import * as gridStyles from './grid.module.css';

const Grid = () => {

    const arrOfSquares = [...Array(36).keys()];

    const {selectedColor} = useContext(AppContext);

    return (
        <div className={gridStyles.gridContainer}>
            <div className={gridStyles.grid}>
                {arrOfSquares.map((square, index) => {
                    return <Square key={index} number={index+1} selectedColor={selectedColor} />
                })}
            </div>
        </div>
    )
}

export default Grid;