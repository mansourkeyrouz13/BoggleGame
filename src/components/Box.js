import React from 'react';
import { useState } from 'react';
import "./Box.css";


export const Box = ({ value, boxToBoard, idx, boxActive}) => {
  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [id, setId] = useState(idx);
  // setIsActive(boxActive);
  
  
  const handleStyle = () => {
     setIsActive(true);
  };

  const handleClick = e => {
    let myid = e.target.id;
    console.log(myid)
    document.getElementById(myid).disabled=true;

    let buttons = document.getElementsByClassName('Box');

    if(myid % 5 == 1 && myid!=1 && myid!=21)
    {
      console.log('first coloumn')
      for(var i=1; i<buttons.length ; i++)
      {
        //console.log('loop ok')
        if(i != id-5 && i != id-4 && i != id+1 && i != id+5 && i != id+6)
        {
          document.getElementById(i).disabled=true;
        }
        else
        {
          document.getElementById(i).disabled=false;
        }
      }
    }
    else
    if(myid == 7 || myid == 8 || myid == 9 || myid == 12 || myid == 13 || myid == 14 || myid == 17 || myid == 18 || myid == 19)
    {
      console.log('middle squares')
      
    }




    // for(var i=1; i<buttons.length ; i++)
    // {
    //   if( i == id-1 || i == id-4)
    //   {
    //     document.getElementById(i).disabled=false;
    //   }
    //   else
    //   {
    //   buttons[i].disabled = true;
    //   }
    // }

    
  };

    return (
        <button className='Box' id={idx} style={{backgroundColor: isActive ? '#fcc95a' : '#f4f2f2'}} onClick={(e) => {boxToBoard({value}); handleStyle(); handleClick(e);}}
        disabled={isDisabled}>
          {value}
        </button>
    )
}