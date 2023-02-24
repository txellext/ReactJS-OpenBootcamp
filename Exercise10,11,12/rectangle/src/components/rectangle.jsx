import React from 'react';

let initialColour = {
    backgroundColor: 'black',
    width: 255,
    height: 255,
    color: 'white',
    margin: 50
};



const Rectangle = () => {

    const changeColourRandom = () => {
            console.log("Mouse enter rectangle")     
    }

    const stopColorLeave = () => {
        console.log('Mouse leave rectangle')
    }

    const stopColorClick = () => {
        console.log('Mouse click 2 times')
    }

    return (
        <div>
            <div onMouseEnter={changeColourRandom} onMouseLeave={stopColorLeave} onDoubleClick={stopColorClick} style={ initialColour }></div>
        </div>
    );
};

export default Rectangle;
