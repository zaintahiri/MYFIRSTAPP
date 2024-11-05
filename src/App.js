import logo from './logo.svg';
import './App.css';
import {add,div,sub,multi} from './Calc';
import { useState } from 'react';


function App() {
let [count,setCount]=useState(0)
  const Counter=()=>{
    setCount(count++)
  }
  return (
    <div>
    <ul>
      <h2>Un-ordered list</h2>
      <li>Addition of two values = {add(44,55)} </li>
      <li>Subtraction of two values = {sub(44,55)} </li>
      <li>Division of two values = {div(44,55)} </li>
      <li>Multiplication of two values = {multi(44,55)} </li>
    </ul>
    </div>

   
  );
}

export default App;
