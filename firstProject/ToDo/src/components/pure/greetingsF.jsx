import React, { useState} from 'react';
import PropTypes from 'prop-types';


const GreetingsF = (props) => {
    const [age, setage] = useState(29);

    const birthday = () => {
        // actualizamos el State
        setage(age + 1);
    }

    return (
        <div>
            <h1>
                HELLO { props.name} from functional component
            </h1>
            <h2>
                You age: { age }
            </h2>
            <div>
                <button onClick={birthday}>
                    Turn...
                </button>
            </div>     
        </div>
    );
};


GreetingsF.propTypes = {
    name: PropTypes.string
};


export default GreetingsF;
