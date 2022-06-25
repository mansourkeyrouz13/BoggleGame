import './App.css';
import {Board} from './components/Board';
import { useState } from 'react';
import {Timer} from './components/Timer';

function App() {
  const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const N = 25;
  const board = [];

  const fillBoards = (x) => {
  for(var i=0; i<x; i++)
  {
    board.push(alphabets[Math.floor(Math.random()*alphabets.length)]);
  }
  }  

  fillBoards(N);



  return (
   
    <div className="App">
      <Timer></Timer>
      <Board board={board} ></Board>
    </div>
  );
}

export default App;
