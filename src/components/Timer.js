import React from 'react'
import { useState, useEffect } from 'react';
import './Timer.css'

export const Timer = ({time})=> {
    time=time.toString()
    let minute = parseInt(time.split(':')[0]);
    let second = parseInt(time.split(':')[1]);
    

    const [seconds, setSeconds] = useState(second)
    const [minutes, setMinutes] = useState(minute)

    function updateTime() {
        if (minutes == 0 && seconds == 0) {
        console.log('Game Over')
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
    </div>
  )
}

