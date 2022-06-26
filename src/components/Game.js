import React from 'react'
import { useState, useEffect } from 'react';
import {Board} from './Board';
import { useParams } from 'react-router-dom';
import {Timer} from './Timer';

export const Game = ()=> {

    const alphabets = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    const N = 25;
    const board = [];

    let { time } = useParams(); 
    
    useEffect(() => {
        //console.log(`/game/${time}`);
     }, []);

    const fillBoards = (x) => {
    for(var i=0; i<x; i++)
    {
      board.push(alphabets[Math.floor(Math.random()*alphabets.length)]);
    }
    }  
  
    fillBoards(N);

  return (
    <div>
      {/* <Timer time={time}></Timer> */}
      <Board board={board} time={time}></Board>
    </div>
)
}

