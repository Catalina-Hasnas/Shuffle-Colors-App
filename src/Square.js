import React, {useState} from 'react';
import * as squareStyles from './square.module.css'

const Square = (props) => {

    const [gridSquareColor, setGridSquareColor] = useState('white');

    let squareColor = props.color || gridSquareColor;

    const handleGridSquareClick = () => {
        setGridSquareColor(props.selectedColor)
    }

    return (
        <div 
            className={squareStyles.square} 
            style={{backgroundColor: squareColor}}
            onClick={props.onClickFunction || handleGridSquareClick}
        >
            {props.number}
        </div>
    )
}

export default Square;