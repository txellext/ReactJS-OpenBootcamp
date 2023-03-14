import React, { useState } from 'react';

let red = 0;
let green = 200;
let blue = 150;

// ? Login Style
const loggedStyle = {
    backgroundColor: `rgb(${red},${green},${blue})`,
    color: 'white',
    fontWeight:'bold'

};

// ? Logout Style
const unloggedStyle = {
    backgroundColor: 'tomato',
    color: 'white',
    fontWeight:'bold'
};

// Login Logout buttons: optionalRender will be a container component 
// and we will create pure components for each login logout button

const LoginButton = ({loginAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={loginAction}> Login </button>
    )
}

const LogoutButton = ({logoutAction, propStyle}) => {
    return(
        <button style={propStyle} onClick={logoutAction}> Logout </button>
    )
}

// ? (true Expresion) && expresion => expresion renderized
// ? (false Expresion) && expresion => no expresion renderized





const OptionalRender = () => {

    const [acces, setAcces] = useState(false);

    const [nMessages, setNMessages] = useState(0); // messages unread

    // const updateAccess = () => {
    //     setAcces(!acces);
    // }

    const loginAction = () => {
        setAcces(true)
    }

    const logoutAction = () => {
        setAcces(false)
    }

    let optionalButton;

    // if(acces){
    //     optionalButton = <button onClick={updateAccess}> Logout </button>
    // }else{
    //     optionalButton = <button onClick={updateAccess}> Login </button>
    // }

    if(acces){
        optionalButton = <LogoutButton propStyle={ unloggedStyle} logoutAction={ logoutAction } ></LogoutButton>
    }else{
        optionalButton = <LoginButton propStyle={ loggedStyle }  loginAction={ loginAction }></LoginButton>
    }

// Unread messages
    let addMessages = () => {
        setNMessages(nMessages + 1);
    }

    return (
        <div>
            {/** Optional button */}
            { optionalButton }
            {/**N messages unread */}
            {/* { nMessages > 0 && nMessages === 1 && <p>You have {nMessages} new message...</p>} 
            { nMessages > 1 && <p>You have {nMessages} new messages...</p>} 
            { nMessages === 0 && <p>There are no new messages</p> } */}
            {/* Ternary Operator */}
            { acces ? (
                <div>
                { nMessages > 0 ?
                <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p> :
                <p>There are no new messages</p> 
                }
                <button onClick={addMessages}> {nMessages === 0 ? 'Add your first message': 'Add new Message'} </button>
                </div>) : null }
        </div>
    );
}

export default OptionalRender;