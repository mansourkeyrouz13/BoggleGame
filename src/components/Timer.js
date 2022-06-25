import React from 'react'
import { useState, useEffect } from 'react';
import './Timer.css'

export const Timer = ()=> {
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(5)

    function updateTime() {
        if (minutes == 0 && seconds == 0) {
          //reset
          setSeconds(0);
          setMinutes(5);
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

