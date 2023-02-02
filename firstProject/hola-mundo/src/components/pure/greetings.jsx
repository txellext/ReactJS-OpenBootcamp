import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greetings extends Component {

    constructor(props){
        super(props);
        this.state = {
            age: 29
        }
    }

    render() {
        return (
            <div>
                <h1>
                    HELLO { this.props.name}
                </h1>
                <h2>
                    Your age is: { this.state.age}
                </h2>
                <div>
                    <button onClick={this.birthday}>
                        Turn...
                    </button>
                </div>
            </div>
        );
    }

    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        )
        )
    }
}


Greetings.propTypes = {
    name: PropTypes.string,
};


export default Greetings;
