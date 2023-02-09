import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import B from '../pure/B';


const A = (contact) => {
    return (
        <div>
            <h1>
                Name: { contact.name }
            </h1>
            <h2>
             Surname: { contact.surname }
            </h2>
            <h2>
                Email: { contact.email }
            </h2>
            <h2>
                <B state={true} ></B>
            </h2>
        </div>
    );
};


A.propTypes = {
    contact: PropTypes.instanceOf(Contact)

};


export default A;
