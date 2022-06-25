import React from 'react';
import { useState } from 'react';
import "./Box.css";


export const Box = ({ value, boxToBoard, idx}) => {
  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleStyle = () => {
     setIsActive(true);
  };

  const handleClick = e => {
    console.log(e.target.id);
  };

    return (
        <button className='Box' id={idx} style={{backgroundColor: isActive ? '#fcc95a' : '#f4f2f2'}} onClick={(e) => {boxToBoard({value,isActive}); handleStyle(); handleClick(e);}}
        disabled={isDisabled}>
          {value}
        </button>
    )
}