import {React, useState} from 'react';
import Line from './Line';
import './App.css';

const App = () => {

  const [arrOfColors, setArrOfColors] = 
    useState([
      '#b7d2c7', 
      '#6f9689', 
      '#e8cc71', 
      '#bf2660', 
      '#9aa8c3', 
      '#e2bfb1'
    ]);
  const [arrOfLines, setArrOfLines] = useState([1,2,3,4,5,6]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  const shuffleColors = (array) => {
    let newArray = shuffleArray(array);
    setArrOfColors([...newArray]);
  }

  const shuffleLines = (array) => {
    let newArray = shuffleArray(array);
    setArrOfLines([...newArray]);
  }

  const rotateArrToLeft = (arr) => {
    let temp = [];
    for (var i = 0; i<arr.length - 1; i++) {
        temp[i] = arr[i+1];
    }
    temp[i] = arr[0];
    return temp;
  }

  const rotateArrToLeftNTimes = (arr, n) => {
    let newArr = arr;
    while (n--) {
        newArr = rotateArrToLeft(newArr)
    }
    return newArr
  }

  return (
    <div className="App">
      {arrOfLines.map((line, index) => 
        <Line key={index} arr={rotateArrToLeftNTimes(arrOfColors, line)}/>
      )}
      <button onClick={() => shuffleColors(arrOfColors)}> Shuffle colors! </button>
      <button onClick={() => shuffleLines(arrOfLines)}> Shuffle lines! </button>
    </div>
  );
}

export default App;
