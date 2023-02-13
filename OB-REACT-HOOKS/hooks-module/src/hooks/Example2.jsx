/**
 * Examples of:
 * - useState()
 * - useRef() - identify elements in views
 * - useEffect() - views changes
 */

import React, { useState, useRef, useEffect } from 'react';

const Example2 = () => {

    // Create two counters,
    // each one in a different state using useState, initializing in 0

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    // Create a reference using useReff, to associate a variable to a DOM element of component (HTML view)
    const myRef = useRef();

    // Let's increment counter 1 and counter 2
    function increment1(){
        setCounter1(counter1 + 1);
    }


    function increment2(){
        setCounter2(counter2 + 1);
    }

    /**
     * Let's implement useEffect:
     */

    /**
     * ? Case 1: always execute a code snippet
     * In each change in the component state will be executed what is inside useEffect()
     */

    useEffect(() => {
        console.log('component stated changed');
        console.log('Showing reference of DOM element')
        console.log(myRef);
    })


    return (
        <div>
        <h1>*** Exemple of useState(), useRef() and useEffect()  ***</h1>
        <h2>COUNTER 1:{counter1}</h2>
        <h2>COUNTER 2:{counter2}</h2>
        {/* Ref. Element */}
        <h4 ref={myRef}>Ref. Element Exemple</h4>
        {/**Changing counter's buttons */}
        <div>
            <button onClick={increment1}> Increment counter 1 </button>
            <button onClick={increment2}> Increment counter 2</button>
        </div>
            
        </div>
    );
}

export default Example2;
