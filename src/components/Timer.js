import React from 'react'
import { useState, useEffect } from 'react';
import './Timer.css'
import { Result } from "./Result";
import { BiTime } from "react-icons/bi";

export const Timer = ({time, correctNum, inCorrectNum, timerToBoard})=> {
    time=time.toString()
    let minute = parseInt(time.split(':')[0]);
    let second = parseInt(time.split(':')[1]);
    

    const [seconds, setSeconds] = useState(second) //second
    const [minutes, setMinutes] = useState(minute) //minute
    const [isOpen, setIsOpen] = useState(false)

    function updateTime() {
        if(seconds < 10)
        {
        // console.log('seconds less than 10')
        //  setSeconds(seconds => '0' + seconds);
        }
        if (minutes == 0 && seconds == 0) {
        //console.log('Game Over')
        setIsOpen(true)
        return;
        }

          if (seconds == 0) {
            setMinutes(minutes => minutes - 1);
            setSeconds(59);
          } else {
            setSeconds(seconds => seconds - 1);
          }
        
      }

      useEffect(() => {
        const token = setTimeout(updateTime, 1000)
        return function cleanUp() {
          clearTimeout(token);
        }
      })


      const zeroTime = {
        minutes: minutes,
        seconds: seconds
        }

      const TimeIcon = {
          color: 'rgb(212, 8, 8)',
          fontSize: '24px',
          }

  return (
    <div className='timer-wrapper'>
        <div className='sub-time-wrapper'>
        <div>
         <BiTime style={TimeIcon}/>
        </div>
        <div><h6>{minutes}:{seconds}</h6></div>
        </div>
        <input value={zeroTime.minutes +':'+ zeroTime.seconds }
                onChange={timerToBoard(zeroTime.minutes,zeroTime.seconds)}
         readOnly
         style={{display: 'none'}}/>
        <Result open={isOpen} correctNum={correctNum} inCorrectNum={inCorrectNum} />
    </div>
   
  )
}

