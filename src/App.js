import React, { useState } from 'react';
import logo from './logo.svg';
import part1 from './img/part1.png'
import part2 from './img/part2.png'
import part3 from './img/part3.png'
import './App.css';

function App() {
   let [images, setImages]  = useState([
     {image: 'part1', active: true},
     {image: 'part2', active: false},
     {image: 'part3', active: false}
   ]);
   let [currentNum, setCurrentNum] = useState(0);
   function nextNumber() {
     console.log('next');
    //  currentNum === number.length - 1
    //  ? setCurrentNum(0)
    //  : setCurrentNum(currentNum + 1)
   }
   function previusNumber() {
     console.log('previus');
    //  currentNum === 0
    //  ? setCurrentNum(number.length - 1)
    //  : setCurrentNum(currentNum - 1)
   }
  return (
    <div className="App">
      <div className="carousel">
        {images.map(image => 
          <div key={image.name} className="carousel" style={image.active ? {display: 'block'} : {display: 'none'}}>
            <img src={require(`./img/${image.image}.png`)} alt={image.name}/>
          </div>
        )}
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
