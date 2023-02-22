import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../contact.class';


const ContactComponent = ({ contact }) => {
    return (
        <div>
            <h2>
                Name: { contact.name }
            </h2>
            <h3>
                Email: { contact.email }
            </h3>
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

