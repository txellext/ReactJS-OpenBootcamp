import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../contact.class';


const ContactComponent = ({ contact }) => {

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
                This contact is: {contact.connected ? 'Online' : 'Offline'} 
            </h4>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactComponent;

