import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';


const B = (contact) => {
    return (
        <div>
            Contact is: { contact.connected ? 'Online' : 'Offline' }
        </div>
    );
};


B.propTypes = {
    contact: PropTypes.instanceOf(Contact)

};


export default B;
