import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HomePage = () => {

    const location = useLocation();
    const history = useNavigate();
    console.log('We are in Route:', location.pathname); 

    const navigate = (path) => {
        history(path);
    }

    const navigateProps = (path) => {
        history({
            path: path,
            search: '?online=true', // Query Params
            state: {
                online: true,
            }
        });
    }

    return (
        <div>
            <h1>Home Page</h1>
            <div>
                <button onClick={ () => navigateProps('/online-state')}>
                    Go to Page with State / Query Params
                </button>
                <button onClick={ () => navigate('/profile')}>
                    Go to Profile
                </button>
            </div>
        </div>
    );
}

export default HomePage;
