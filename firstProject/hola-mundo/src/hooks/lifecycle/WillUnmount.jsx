/**
 * Exemple of use WillUnmount component method for a class component
 * Exemple of use of hooks for a functional component
 * (when component will disappear)
 * 
 */

import React, { Component, useEffect } from 'react'

export class WillUnmount extends Component {

    componentWillUnmount(){
        console.log('Behaviour before component disappear')
    }

  render() {
    return (
      <div>
        <h1>
            WillUnmount
        </h1>
      </div>
    )
  }
}


export const WillUnmount = () => {

    useEffect(() => {
        // nothing, everything goes inside return

        return () => {
            console.log('Behaviour before component disappear')
        };
    }, []); // Empty because we want only one execution

    return (
        <div>
            <h1>
                WillUnmount
            </h1> 
        </div>
    );
}



