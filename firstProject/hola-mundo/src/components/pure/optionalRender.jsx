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


const OptionalRender = () => {

    const [acces, setAcces] = useState(true);

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

    return (
        <div>
            { optionalButton }
        </div>
    );
}

export default OptionalRender;