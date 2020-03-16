import React, { useState } from 'react';
import logo from './logo.svg';
import part1 from './img/part1.png'
import part2 from './img/part2.png'
import part3 from './img/part3.png'
import './App.css';

function App() {
  let [images, setImages] = useState( [
      { name: 'part1', active: true },
      { name: 'part2', active: false },
      { name: 'part3', active: false }
    ]
  );
  let [currentNum, setCurrentNum] = useState(0);
  function nextNumber(id, title) {
    console.log(images.length);
    let data = [...images];
    console.log(data);
   data.map((item, index) => {
     index == 1
     ? item.active = true
     : item.active = false
   });
   setImages(data);
  }
  function previusNumber() {
    console.log('previus');
  }
  return (

    <div className="App">
      {console.log('hi')}
      <p>{currentNum}</p>
      <div className="carousel">
        {images.map(image =>
          <div key={image.name} className="carousel" style={image.active ? { display: 'block' } : { display: 'none' }}>
            <img src={require(`./img/${image.name}.png`)} alt={image.name} />
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
