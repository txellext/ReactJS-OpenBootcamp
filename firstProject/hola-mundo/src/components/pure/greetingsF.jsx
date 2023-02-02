import React from 'react';
import PropTypes from 'prop-types';


const GreetingsF = (props) => {
    return (
        <div>
            <h1>
                HELLO { props.name} from functional component
            </h1>
            {/*<h2>
                Tu edad es de: { this.state.age}
            </h2>
            <div>
                <button onClick={this.birthday}>
                    Turn...
                </button>
            </div>  */}          
        </div>
    );
};


GreetingsF.propTypes = {
    name: PropTypes.string
};


export default GreetingsF;
