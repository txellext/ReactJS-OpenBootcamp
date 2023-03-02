import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';





const Rectangle = () => {
  
    const [Rs, setRs] = useState(0);
    const [Gs, setGs] = useState(0);
    const [Bs, setBs] = useState(0);

    useEffect(() => {
        console.log('Rs or Gs or Bs state modified')
        return () => {
            console.log('Rectangle component is going to unmount...')
        };
    }, [Rs,Gs,Bs]);

    let initialColour = {
        backgroundColor: `rgb(${Rs},${Gs},${Bs})`,
        width: 255,
        height: 255,
        color: 'white',
        margin: 50
    };

    const intervalIdSetColour = 0;
    
    const changeColourRandom = () => {
    console.log("Mouse enter rectangle and inside");
    const tempRs = Math.floor(Math.random()* 256);
    setRs(tempRs);
    const tempGs = Math.floor(Math.random()* 256);
    setGs(tempGs);
    const tempBs = Math.floor(Math.random()* 256);
    setBs(tempBs);
    };

    const intervalColour = () => {
        intervalIdSetColour = setInterval(changeColourRandom, 1000)
    };
   

    const stopColour = () => {
        console.log('Mouse leave rectangle')
        // TODO: not working, see how to clear interval 
        clearInterval(intervalIdSetColour)
    }

    return (
        <div>
            <div onMouseEnter={intervalColour} onMouseLeave={stopColour} onDoubleClick={stopColour} style={ initialColour }></div>
        </div>
    );
};

export default Rectangle;
