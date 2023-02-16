/**
 * Example of lyfe cycle method in a class component
 * and life cycle hook in a functional component
 */

import React, { Component, useEffect } from 'react';

export class DidMount extends Component {

    componentDidMount(){
        console.log('Behaviour before component is added in DOM (render)')
    }

    render() {
        return (
            <div>
               <h1> DidMount</h1> 
            </div>
        );
    }
}


export const DidMountHook = () => {

    useEffect(() => {
        console.log('Behaviour before component is added in DOM (render)');

    }, []); //empty list because we want to apply it each render time. 




    return (
        <div>
        <h1> DidMount</h1> 
     </div>
    );
}

