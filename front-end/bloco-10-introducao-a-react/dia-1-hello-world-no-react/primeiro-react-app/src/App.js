import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}
const compromissos = [ 'estudar', 'viajar', 'namorar', 'jogar' ];

function App() {
  return (
    <div>
   { Task('React') }
   { Task('JS') } 
   { Task('CSS') }  
   { Task('VASCO') } 
   { compromissos.map((itens) => Task(itens)) }
   </div>
  );
}


export default App;
