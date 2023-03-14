/**
 * Component with a form for a user auth
 */

import React, { useState } from 'react';

const LoginForm = () => {

    const initialCredentials = [
        {
           user: '',
           password: '' 
        }
    ];

    // In order to update credentials, we use useState()
    const [credentials, setCredentials] = useState(initialCredentials);


    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
