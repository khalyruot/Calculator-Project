import React from 'react';
import './App.css';
import Nav from './Nav';



function App() {
  // Javascript
  const name = "Allo";


  return (

    <div className="button">
      
      <Nav me={name} />
            <button className="name">
                1
            </button>
            <button className="name">
                2
            </button>
            <button className="name">
                3
            </button>
            <button className="name">
                4
            </button>
            <button className="name">
                5
            </button>
            <button className="name">
                6
            </button>
            <button className="name">
                7
            </button>
            <button className="name">
                8
            </button>
            <button className="name">
                9
            </button>
            <button className="name">
                +
            </button>
            <button className="name">
                x
            </button>
            <button className="name">
                =
            </button>
            <button className="name">
                -
            </button>
            <button className="name">
                / 
            </button>
            <button className="name">
                c
            </button>
            
    </div>
  );
}

export default App;
