import React from 'react'
import { useState, useEffect } from 'react';
import './Timer.css'
import { Result } from "./Result";

export const Timer = ({time, correctNum, inCorrectNum})=> {
    time=time.toString()
    let minute = parseInt(time.split(':')[0]);
    let second = parseInt(time.split(':')[1]);
    

    const [seconds, setSeconds] = useState(0) //second
    const [minutes, setMinutes] = useState(0) //minute
    const [isOpen, setIsOpen] = useState(false)

    function updateTime() {
        if(seconds < 10 && seconds > 0)
        {
        //  console.log('seconds less than 10')
        //  setSeconds(seconds => '0' + seconds);
        }
        if (minutes == 0 && seconds == 0) {
        //console.log('Game Over')
        //setIsOpen(true)
        return;
        }
        else {
          if (seconds == 0) {
            setMinutes(minutes => minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds => seconds - 1);
          }
        }
      }

      useEffect(() => {
        const token = setTimeout(updateTime, 1000)
        return function cleanUp() {
          clearTimeout(token);
        }
      })

    
  


  return (
    <div className='timer-wrapper'>
        <h6>{minutes}:{seconds}</h6>
        <Result open={isOpen} correctNum={correctNum} inCorrectNum={inCorrectNum}/>
    </div>
   
  )
}

