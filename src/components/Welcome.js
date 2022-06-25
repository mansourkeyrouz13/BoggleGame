import React from 'react'
import './Welcome.css'
import { useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'

export const Welcome = ()=> {
    let navigate = useNavigate();
    const [time, setTime] = useState('0:00')
    const [validateMsg, setValidateMsg] = useState('')

    const handleChange = event => {
        setTime(event.target.value);
        console.log('value is:', event.target.value);
      };

   

  return (
   
<div className='welcome-wrapper'>
   <div className="title-wrapper">
        <h1>Welcome to BLOGGER game</h1>
   </div>
   <div className="time-input-wrapper">
        <h3>Please input your desired game time</h3>
      <div className="time-sub">
        <input 
        id="duration-input" 
        type="text" 
        onChange={handleChange}
        // onBlur={onBlur}
        value={time}
        />

        <button className="validate" onClick={() => {
            console.log("time: "+time)
            if(parseInt(time.split(':')[0]) >= 1)
            {
            navigate("/game/"+time)
            }
            }}>Start</button>
      </div>
      <p id="output">{validateMsg}</p>
    </div>
</div>
    
  )
}

