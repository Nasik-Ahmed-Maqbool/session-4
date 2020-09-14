import React, {useState} from 'react';
import logo from './logo.svg';
import {Message} from './Message.js'
import './App.css';

export default function App() {
  let [count , setcount] = useState(1);
  let [ismorning , setmorning] = useState(false);

  return (
    <div className={`box ${ismorning ? 'daylight':''}`}>
      <h2>Have a Good = {ismorning ? 'Morning':'Night'}</h2>
      <Message counter={count} />
     {/* <h1>That's the value of count: {count}</h1> */}
     {/* <button onClick={()=>alert("Button Presses")}>update counter</button>  */}
     <button onClick={()=>setcount(count + 1)}>update counter</button>
     <button onClick={()=>setmorning(!ismorning)}>update day</button>
    </div>
  );
}


