import React from 'react';
import { useState, useEffect } from 'react';
import "./styles/Box.css";


export const Box = ({ value, boxToBoard, idx, boxInactive}) => {
  const [isActive, setIsActive] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [id, setId] = useState(idx);
  
  useEffect (() => {
     setIsActive(false);
    var buttons = document.getElementsByClassName('Box');
    for(var i=1; i<buttons.length ; i++)
    {
      document.getElementById(i).disabled=false;
    }

  }, [boxInactive]);

  const handleClick = e => {
    let myid = e.target.id;
    document.getElementById(myid).disabled=true;

    let buttons = document.getElementsByClassName('Box');

    if(myid % 5 == 1 && myid!=1 && myid!=21)
    {
   
      for(var i=1; i<buttons.length ; i++)
      {
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
      
      for(var i=1; i<buttons.length ; i++)
      {
        if(i != id-6 && i != id-5 && i != id-4 && i != id-1 && i != id+1 && i != id+4 && i != id+5 && i != id+6)
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
    if(myid % 5 == 0 && myid!=5 && myid!=25)
    {
  
      for(var i=1; i<buttons.length ; i++)
      {
        if(i != id-6 && i != id-5 && i != id-1 && i != id+4 && i != id+5)
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
    if(myid == 2 || myid == 3 || myid == 4)
    {

      for(var i=1; i<buttons.length ; i++)
      {
        if(i != id-1 && i != id+1 && i != id+4 && i != id+5 && i != id+6)
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
    if(myid == 22 || myid == 23 || myid == 24)
    {

      for(var i=1; i<buttons.length ; i++)
      {
        if(i != id-6 && i != id-5 && i != id-4 && i != id-1 && i != id+1)
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
    if(myid == 1)
    {
    
      for(var i=1; i<buttons.length ; i++)
      {
        if(i != id+1 && i != id+5 && i != id+6)
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
    if(myid == 5)
    {
      
      for(var i=1; i<buttons.length ; i++)
      {
        if(i != id-1 && i != id+4 && i != id+5)
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
    if(myid == 21)
    {
 
      for(var i=1; i<buttons.length ; i++)
      {
        if(i != id-5 && i != id-4 && i != id+1)
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
    if(myid == 25)
    {
      for(var i=1; i<buttons.length ; i++)
      {
        //console.log('loop ok')
        if(i != id-6 && i != id-5 && i != id-1)
        {
          document.getElementById(i).disabled=true;
        }
        else
        {
          document.getElementById(i).disabled=false;
        }
      }
    }

    
  };

  const changeStyle = {
    backgroundColor: isActive ? '#f2b046' : '#f4f2f2',
    border: isActive ? '2px solid #444447' : '0px solid #444447',
    color: isActive ? '#f9f9f9' : '#444447'
    }

    const handleStyle = () => {
        setIsActive(true);
    };
   
    console.log()
    return (
      <div style={{backgroundColor: '#fcc95a', padding: '4px'}}>
        <button className='Box' id={idx} style={changeStyle} onClick={(e) => {boxToBoard({value}); handleStyle(); handleClick(e);}}
        disabled={isDisabled}>
          {value}
        </button>
        </div>
    )
}