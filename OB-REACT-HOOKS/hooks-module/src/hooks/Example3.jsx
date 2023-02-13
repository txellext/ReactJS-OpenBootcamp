/**
 * Hooks examples:
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Component1
 * Will receive a value from father
 */

// Inicialize a null state, will be fil out with father's data
const myContext = React.createContext(null)

const Component1 = () => {

    const state = useContext(myContext);

    return (
        <div>
            <h1> Token is: {state.token} </h1>
            {/** Print Component 2 */}
            <Component2></Component2>
        </div>
    );
}


const Component2 = () => {

    const state = useContext(myContext)

    return (
        <div>
            <h2> ID session: { state.session}</h2>
        </div>
    );
}

export default function MyContextComponent() {

    const initialState = {
        token: '1234567',
        session: 1
    }

    // We create the state of this component
    const [sessionData, setSessionData] = useState(initialState);

    function updateSession(){
        setSessionData({
                token: 'MAS1234567',
                session: sessionData.session + 1
        });
    }

    return (
        <myContext.Provider value={sessionData}>
            {/** Everything inside can read sessionData data */}
            {/** Also, if updated, components will update too */}
            <h1> *** Example of useState() and useContext() *** </h1>
            <Component1></Component1>
            <button onClick= {updateSession}> Update Session </button>
        </myContext.Provider>
    )
}



