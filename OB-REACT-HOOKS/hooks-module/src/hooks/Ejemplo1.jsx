/**
 * Example of useState hook
 * Creae a rcf and acces to private states using a hook and modify them 
  */ 
import React, { useState } from 'react';

const Ejemplo1 = () => {

    // Define an initial value for a counter
    const initialValue = 0;

    // Define an initial value for a person
    const initialPerson = {
        name: 'Jack',
        email: 'jackandjock@protonmail.com'
    }

    /**
     * We want that initialValue and initialPerson be a part of the component state
     * in order to be able to change them and print them in component view
     * 
     * Structure:
     * const [variableName, changingFunction] = useState(initialValue)
     * 
     * Syntaxis: changingFunction = setvariableName
     */
    const [counter, setCounter] = useState(initialValue);
    const [person, setPerson] = useState(initialPerson);

    /**
     * Create a method to increment the private state of the counter
     */
    function toChangeCounter(){
        // ? functionToChange(newValue)
        setCounter(counter + 1);
    }

    /**
     * Method for changing the private state of the person
     */
    function toChangePerson(){
        setPerson({
            name: 'Txell',
            email: 'txellas@protonmail.com'
        })
    }

    return (
        <div>
            <h1>
                ***Ejemplo de useState() ***
            </h1>
            <h2> CONTADOR: {counter} </h2>
            <h2> PERSON DATA: </h2>
                <h3> NAME: { person.name }</h3>
                <h3> EMAIL: { person.email }</h3>
            {/* Buttons for changing states*/}
            <button onClick={toChangeCounter}> Increase Counter </button>
            <button onClick={toChangePerson}> Change Person </button>
        </div>
    );
}

export default Ejemplo1;
