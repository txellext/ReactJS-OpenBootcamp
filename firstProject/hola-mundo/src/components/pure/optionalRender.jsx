import React, { useState } from 'react';


// Login Logout buttons: optionalRender will be a container component 
// and we will create pure components for each login logout button

const LoginButton = ({loginAction}) => {
    return(
        <button onClick={loginAction}> Login </button>
    )
}

const LogoutButton = ({logoutAction}) => {
    return(
        <button onClick={logoutAction}> Logout </button>
    )
}

// ? (true Expresion) && expresion => expresion renderized
// ? (false Expresion) && expresion => no expresion renderized

const OptionalRender = () => {

    const [acces, setAcces] = useState(true);

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
        optionalButton = <LogoutButton logoutAction={logoutAction} ></LogoutButton>
    }else{
        optionalButton = <LoginButton loginAction={loginAction}></LoginButton>
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
            { nMessages > 0 ?
                <p>You have {nMessages} new message{nMessages > 1 ? 's' : null}...</p> :
                <p>There are no new messages</p> 
            }
            <button onClick={addMessages}> {nMessages === 0 ? 'Add your first message': 'Add new Message'} </button>
        </div>
    );
}

export default OptionalRender;