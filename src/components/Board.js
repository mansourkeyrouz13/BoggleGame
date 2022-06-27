import React from 'react'
import { useState } from 'react';
import { Box } from "./Box";
import {Validate} from './Validate';
import {Timer} from './Timer';
import "./Board.css"
import Axios from "axios"
import { Result } from "./Result";

export const Board = ({ board, time}) => {

  var uniqueKey = 1;

  var finalWord= "";
  const miniumThree ="The word must be at least 3 letters";
  const notExists= "Word does not exist";
  const correctWord= "Correct word, continue";


  const baseDictApiUrl="https://api.dictionaryapi.dev/api/v2/entries/en/";

  const [word, setWord] = useState([]);
  const [message, setMessage] = useState('');
  const [totalCorrect, settotalCorrect] = useState(0);
  const [totalWrong, settotalWrong] = useState(0);
  const [timeUp, setTimeUp] = useState(false);
  const [boxActive, setBoxActive] = useState(false);

  const boxToBoard = (value) => {
    setWord(current => [...current, value]);
  }

  // word.map((v)=>console.log(finalWord=finalWord.concat(v.value)))
  const resetWord = () => {
    setWord([]);
  }

  const validateWord = () => {
    console.log('Validate is clicked')
    console.log(finalWord)
    word.map((v)=>finalWord=finalWord.concat(v.value))
    console.log("final Word: "+finalWord)
    if(finalWord.length < 3)
    {
      setMessage(miniumThree)
      resetWord();
    }
    else
    {
    Axios.get(baseDictApiUrl+finalWord).then((response) => {
     console.log(response);
     if(response.data[0].word === finalWord)
     {
      setMessage(correctWord)
      settotalCorrect(totalCorrect + 1)
      console.log("totalCorrect: "+totalCorrect)
      resetWord();
     }
     
    }).catch(function (error) {
      if (error.response) {
        if(error.response.status == 404)
        {
          console.log('Word does not exist');
          setMessage(notExists);
          settotalWrong(totalWrong + 1)
          resetWord();
        }
      }
    });
    }
    setBoxActive(false);
  }



  return (
    <div>
      <Timer time={time} correctNum={totalCorrect} inCorrectNum={totalWrong} ></Timer>
    <div className="board" style={{visibility: timeUp ? 'hidden' : 'visible'}}>
      {
        board.map((value, idx) => {
          return <Box value={value} key={uniqueKey++} boxToBoard={boxToBoard} idx={idx+1} boxActive={boxActive}/>;
        })
      }
         <Validate validateWord={validateWord} message={message}/>
    </div>
    </div>
  )
}