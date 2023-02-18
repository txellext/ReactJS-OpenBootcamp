import React, { useState} from 'react';

// Defining styles through constants
// ? Style for logged user
const loggedStyle = {
    color: 'white'
};

// ? Style for unlogged user
const unloggedStyle = {
    color: 'green',
    fontWeight: 'bold'
}


const GreetingsStyled = (props) => {

    // Generate an state in order to control logging
    const [logged, setLogged] = useState(false); // Not logged

    const greetingUser = () => (<p> Hola, {props.name}</p>);
    const pleaseLogin = () => (<p> Please log in </p>);

    return (
        <div style={ logged ? loggedStyle : unloggedStyle }>
            { logged ? 
                greetingUser() 
                : 
                pleaseLogin() 
            }
            <button onClick={() => {
                console.log('Pushed button');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login'}
            </button>
            
        </div>
    );
}

export default GreetingsStyled;
