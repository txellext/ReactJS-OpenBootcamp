/**
 * Component with a form for a user register
 */

import React, { useState } from 'react';

const LoginForm = () => {

    const initialData = [
        {
           user: '',
           name: '',
           email: '',
           password: '' 
        }
    ];

    // In order to update credentials, we use useState()
    const [data, setData] = useState(initialData);


    return (
        <div>
            
        </div>
    );
}

export default LoginForm;
