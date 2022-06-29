import React from 'react'
import './styles/Welcome.css'
import { useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import photo from '../assets/Boggle-Welcome.png';

export const Welcome = ()=> {
    let navigate = useNavigate();
    const [time, setTime] = useState('0:00')
    const [validateMsg, setValidateMsg] = useState('')

    const handleChange = event => {
      var isValid = /^[0-5]?\d:[0-5]\d$/.test(event.target.value);
      if (isValid) {
        setValidateMsg('')
        setTime(event.target.value);
      } else {
        console.log('not valid')
        setValidateMsg('Duration format is not valid')
      }    
      };


     const validate = () => {
        if(parseInt(time.split(':')[0]) >= 1)
        {
        navigate("/game/"+time)
        }
        else
        if(parseInt(time.split(':')[1]) > 59)
        {
            setValidateMsg("Invalid time entry")
        }

        };
   

  return (
   
<div className='welcome-wrapper'>
    <div className='image-wrapper'>
        <img src={photo}/>
    </div>
   <div className="title-wrapper">
        <h1>Welcome to BOGGLE game</h1>
   </div>
   <div className="time-input-wrapper">
        <h3>Please input your desired game time</h3>
      <div className="time-sub">
        <input 
        id="duration-input" 
        type="text" 
        onChange={handleChange}
        />

        <button className="validate" onClick={() => {
            validate()
            }}>Start</button>
      </div>
      <p id="output">{validateMsg}</p>
    </div>
</div>
    
  )
}

