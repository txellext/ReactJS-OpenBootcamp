import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';





const Rectangle = () => {
  
    const [Rs, setRs] = useState(0);
    const [Gs, setGs] = useState(0);
    const [Bs, setBs] = useState(0);
    const [colourInterval, setColourInterval] = useState(0);



    let initialColour = {
        backgroundColor: `rgb(${Rs},${Gs},${Bs})`,
        width: 255,
        height: 255,
        color: 'white',
        margin: 50
    };
  
    useEffect(() => {
        console.log('Rs or Gs or Bs state modified')
        return () => {
            console.log('Rectangle component is going to unmount...')
        };
    }, [Rs,Gs,Bs]);


    const changeColourRandom = () => {
    console.log("Mouse enter rectangle and inside");
    const tempRs = Math.floor(Math.random()* 256);
    setRs(tempRs);
    const tempGs = Math.floor(Math.random()* 256);
    setGs(tempGs);
    const tempBs = Math.floor(Math.random()* 256);
    setBs(tempBs);
    };


    const onChangeColour = () => {
        setColourInterval(setInterval(changeColourRandom, 1000));
    };
   

    const onstopColour = () => {
        console.log('Mouse leave rectangle')
        // TODO: not working, see how to clear interval 
        clearInterval(colourInterval)
    }

    return (
        <div>
            <div onMouseEnter={onChangeColour} onMouseLeave={onstopColour} onDoubleClick={onstopColour} style={ initialColour }></div>
        </div>
    );
};

export default Rectangle;
