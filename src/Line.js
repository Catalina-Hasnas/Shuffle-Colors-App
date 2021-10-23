import {React} from 'react';
import './App';

const Line = ({arr}) => {
    return (
        <div className="Line">
            {arr.map((color) => {
                return (
                    <div style={{backgroundColor: color, width: '50px', height: '50px'}}></div>
                )
            })}
        </div>
    )
}

export default Line;