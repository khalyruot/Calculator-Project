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
            <Nav me={name}/>
            <Nav me={name}/>
        
            
            

        </div>
    )

  
}

export default App;
