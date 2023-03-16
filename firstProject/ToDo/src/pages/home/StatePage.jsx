import React from 'react';
import { useLocation  } from 'react-router-dom';

const StatePage = () => {

    const location = useLocation();

    console.log(location.state.online); // State sent
    console.log(location.search); // Quert Params Sent

    return (
        <div>
            <h1> { location.state.online } </h1>
        </div>
    );
}

export default StatePage;
