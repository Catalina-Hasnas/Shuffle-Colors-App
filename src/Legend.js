import React, { useState, useContext } from 'react';
import Square from './Square';
import AppContext from './context/AppContext';
import * as legendStyles from './legend.module.css';

const Legend = () => {

    const {selectedColor, dispatch} = useContext(AppContext);

    const arrOfColors = ['rgb(183, 210, 199)', 'rgb(111, 150, 137)', 'rgb(232, 204, 113)', 'rgb(191, 38, 96)', 'rgb(154, 168, 195)', 'rgb(226, 191, 177)'];

    const handleColorSelect = (event) => {
        const selectedColor = event.target.style["background-color"]
        dispatch({type: 'SET_SELECTED_COLOR', payload: selectedColor })
    }

    return (
        <div className={legendStyles.legend}>
            {arrOfColors.map((color, index) => {
                return <Square key={index} number={index+1} color={color} onClickFunction={handleColorSelect}/>
            })}
        </div>
    )
}

export default Legend;