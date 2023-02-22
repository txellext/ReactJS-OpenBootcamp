import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../contact.class';


const ContactComponent = ({ contact, connected, deleted }) => {

    useEffect(() => {
        console.log('contact created')
        return () => {
            console.log(`Contact: ${contact.name} is goint to unmount...`);
        };
    }, [contact]);


    return (
        <div className='contact-component'>
            <h2> { contact.name } </h2>
            <h3> { contact.email } </h3>
            <h4>
                This contact is: 
                <p onClick={() => connected(contact)}> {contact.connected ? 'Online' : 'Offline'} </p> 
            </h4>
            <button onClick={() => deleted(contact)}>Delete</button>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connected: PropTypes.func.isRequired,
    deleted: PropTypes.func.isRequired,
};


export default ContactComponent;

