import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
   let [number, setNumber]  = useState([
     1,
     2,
     3,
     4,
     5
   ]);
   let [currentNum, setCurrentNum] = useState(0);
   function nextNumber() {
     console.log('next');
     currentNum === number.length - 1
     ? setCurrentNum(0)
     : setCurrentNum(currentNum + 1)
   }
   function previusNumber() {
     console.log('previus');
     currentNum === 0
     ? setCurrentNum(number.length - 1)
     : setCurrentNum(currentNum - 1)
   }
  return (
    <div className="App">
      <div className="numbers">
        {number[currentNum]}
      </div>
      <div className="controllers">
        <button
          onClick={nextNumber}
        >Next
        </button>
        <button
          onClick={previusNumber}
          >Previus
          </button>
      </div>
    </div>
  );
}

export default App;
