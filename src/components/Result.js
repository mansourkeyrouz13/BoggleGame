import React from 'react'
import './styles/Result.css'
import {useNavigate} from 'react-router-dom'

export const Result = ({open, correctNum, inCorrectNum})=> {
    let navigate = useNavigate();
 if(!open)
 return null;


  return (
    <div className="results-wrapper">
        <div className="center">
            <h4>Time Is Over!</h4>
        </div>
        <div className="words-wrapper">
            <div>
                <h4>Correct Words</h4>
                <div className="results-word">
                <h5>{correctNum}</h5>
                </div>
            </div>
            <div>
                <h4>Incorrect Words</h4>
                <div className="results-word">
                    <h5>{inCorrectNum}</h5>
                </div>
            </div>
        </div>
        <div className="try-again-wrapper center">
            <button className="validate try-again-btn" onClick={() => {navigate("/")}}>Try Again!</button>
        </div>
    </div>
  )
}

