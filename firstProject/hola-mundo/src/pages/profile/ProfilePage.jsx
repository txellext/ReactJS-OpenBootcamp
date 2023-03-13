import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {

    const history = useNavigate();

    const goBack = () => {
        history(-1)
    }

    return (
        <div>
            <h1> Your Profile </h1>
            <div>
                <button onClick={ goBack }>
                    Go Back
                </button>
            </div>
        </div>
    );
}

export default ProfilePage;
