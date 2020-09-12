import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [count , setcount] = useState(1);

  return (
    <div>
     <h1>That's the value of count: {count}</h1>
     {/* <button onClick={()=>alert("Button Presses")}>update counter</button>  */}
     <button onClick={()=>setcount(count + 1)}>update counter</button>
    </div>
  );
}

export default App;
