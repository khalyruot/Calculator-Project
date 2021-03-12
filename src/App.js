import React, {useState} from 'react';
import './App.css';
import Nav from './Nav';



function App() {
  // Javascript

  const[isRed, setRed]= useState(false)
  const[count, setCount]= useState(0)
  const name = "Hello World";
  


function clickHandler1(){
    setCount("1");
}
function clickHandler2(){
    setCount("2");

}
function clickHandler3(){
    setCount("3");
}
function clickHandler4(){
    setCount("4");
}
function clickHandler5(){    
    setCount("5");
}
function clickHandler6(){  
    setCount("6");
}
function clickHandler7(){   
    setCount("7");
}

function clickHandler8(){   
    setCount("8");
}
function clickHandler9(){
    setCount("9");
}
function clickHandler10(){       
    setCount("+");      
}
function clickHandler11(){    
    setCount("x");
}
function clickHandler12(){  
    setCount("=");
}
function clickHandler13(){  
    setCount("-");
}
function clickHandler14(){  
    setCount("/");
}
function clickHandler15(){  
    setCount("C");
}
    return( 
        
        <div className="button">
            
            
            <Nav me={name}/>
        
            
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
    )

  
}

export default App;
