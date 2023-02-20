/**
 * Class Component
 * 
 
import React, { Component } from 'react'
//import '../../styles/clock.scss';

class Clock extends Component {
   constructor(props) {
      super(props);
      // Estado privado del component
      this.state = {
         // Se genera una fecha como estado inicial del componente
         fecha: new Date(),
         edad: 0,
         nombre: 'Martín',
         apellidos: 'San José'
      };
   }
   componentDidMount(){
      this.timerID = setInterval (
         () => this.tick(), 1000
      );
   }
   componentWillUnmount() {
      clearInterval (this.timerID);
   }
   render() {
      return (
         <div>
         <h2>
         Hora Actual:
         {this.state.fecha.toLocaleTimeString()}
         </h2>
         <h3>{this.state.nombre} {this.state.apellidos}</h3>
         <h1>Edad: {this.state.edad}</h1>
         </div>
      )
   }
   tick(){
      this.setState((prevState) => {
         let edad = prevState.edad +1;
         return {
            ...prevState,
            fecha: new Date(),
            edad
         }
      });
   }
}
export default Clock; */


/**
 * Functional Component
 * 
 */

import React, { useState, useEffect } from 'react';

const Clock = () => {

    const initialState = {
        date: new Date(),
        name: 'Martín',
        surname: 'SanJosé',
        age: 0
    };

    const [state, setState] = useState(initialState);

    useEffect(() => {
        const timerID = setInterval(
            () => tick(), 1000
            );
        return () => {
            clearInterval (timerID);
        };
    });

    function tick(){
        // ? functionToChange(newValue)
        setState({
            date: new Date(),
            age: state.age + 1,
            name: state.name,
            surname: state.surname
        })
    }

    return (
        <div>
            <h2>
                Current Time: {state.date.toLocaleTimeString()}
            </h2>
            <h3>{ state.name } { state.surname }</h3>
            <h1>Age: { state.age }</h1>
        </div>
    );
}

export default Clock;
