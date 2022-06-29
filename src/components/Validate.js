import React from 'react'
import './styles/Validate.css'

export const Validate = ({validateWord, message})=> {
  return (
    <div className="validate-wrapper">
    <button className="validate" onClick={validateWord}>Validate</button>
    <div className='message-wrapper'>{message}</div>
    </div>
  )
}

