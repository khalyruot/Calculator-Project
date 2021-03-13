import React from 'react';
import './App.css';



const Nav = (props) => (

  <div className="button">
    
    <h1 className="item1">{props.me}</h1>
    <button onClick={clickHandler1} className="name">
                1
            </button>
            <button onClick={clickHandler2} className="name">
                2
            </button>
            <button onClick={clickHandler3} className="name">
                3
            </button>
            <button onClick={clickHandler4} className="name">
                4
            </button>
            <button onClick={clickHandler5} className="name">
                5
            </button>
            <button onClick={clickHandler6} className="name">
                6
            </button>
            <button onClick={clickHandler7} className="name">
                7
            </button>
            <button onClick={clickHandler8} className="name">
                8
            </button>
            <button onClick={clickHandler9} className="name">
                9
            </button>
            <button onClick={clickHandler10} className="name">
                +
            </button>
            <button onClick={clickHandler11} className="name">
                x
            </button>
            <button onClick={clickHandler12} className="name">
                =
            </button>
            <button onClick={clickHandler13} className="name">
                -
            </button>
            <button onClick={clickHandler14} className="name">
                /
            </button>
            <button onClick={clickHandler15} className="name">
                C
            </button>
            
          
  </div>
  
);
    



    


export default Nav;
