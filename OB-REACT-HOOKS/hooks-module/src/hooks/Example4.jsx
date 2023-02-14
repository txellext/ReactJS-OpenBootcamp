/**
 * Example for understand props.children use: we can pass html elements with props.children
 */

import React from 'react';

const Example4 = (props) => {
    return (
        <div>
        {/** This component (props.children) will print elements from provider/father */}
            <h1> Example of CHILDREN PROPS </h1>
            <h2> 
                Name: { props.name }
            </h2>
            {props.children}
            
        </div>
    );
}

export default Example4;
