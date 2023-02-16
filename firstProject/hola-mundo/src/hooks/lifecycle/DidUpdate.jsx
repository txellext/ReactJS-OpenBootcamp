/**
 * Example of componentDidUpdate use in component class and hook in a functonal component
 */

import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {

    componentDidUpdate() {
        console.log('Behaviour when component receive props or any change in its private state')
    }

    render() {
        return (
            <div>
                <h1> DidUpdate </h1>
            </div>
        );
    }
}



export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Behaviour when component receive props or any change in its private state')
    });

    return (
        <div>
        <h1> DidUpdate </h1>
    </div>
    );
}



