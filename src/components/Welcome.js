import React from 'react'
import './styles/Welcome.css'
import { useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import photo from '../assets/Boggle-Welcome.png';

export const Welcome = ()=> {
    let navigate = useNavigate();
    const [time, setTime] = useState('0:00')
    const [validateMsg, setValidateMsg] = useState('')
    var letters = /^[A-Za-z]+$/;

    const handleChange = event => {
        setTime(event.target.value);
        // console.log('value is:', event.target.value);
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
        else
        {
            //console.log('else')
            setValidateMsg("Time must be greater than 1 minute")
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
        // onBlur={onBlur}
        value={time}
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

