/**
 * class component as an example of lifecycle methods
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'

class LifeCycleExample extends Component {
    constructor(props) {
        super(props)
        console.log('CONSRUCTOR: when instance of a component')

    }

    componentWillMount() {
        console.log('WillMount: before component mounting')

    }

    componentDidMount() {
        console.log('DidMount: just once component is mounted, and before render')

    }

    componentWillReceiveProps(nextProps) {
        console.log('WillReceiveProps: If new props will be received')

    }

    shouldComponentUpdate(nextProps, nextState) {
        /**
         * Use: if a component should be updated or not, similar to useEffect()
         */
        // return true or false
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WillUpdate: Just before update ') 
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('DidUpdate: Just after update')
    }

    componentWillUnmount() {
        console.log('WillUnmount: just before disapear ')
    }

    render() {
        return (
            <div>

            </div>
        )
    }

}

LifeCycleExample.PropTypes = {

}