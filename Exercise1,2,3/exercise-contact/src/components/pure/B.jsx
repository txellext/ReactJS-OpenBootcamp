import React, { useState } from 'react';
import PropTypes from 'prop-types';


const B = (state) => {
    const [connected, setConnected] = useState(state);

    return (
        <div>
            <h2>
            Contact is: { connected ? 'Online' : 'Offline' }
            </h2>
            <button onClick={() => setConnected(!connected)}> { connected ? 'Offline' : 'Online' } </button>
        </div>
    );
};


B.propTypes = {
    state: PropTypes.bool,

};


export default B;
