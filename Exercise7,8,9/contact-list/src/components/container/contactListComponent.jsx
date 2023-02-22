import React from 'react';
import { Contact } from '../../contact.class';
import ContactComponent from '../pure/contactComponent';

const ContactListComponent = () => {

    const defaultContact1 = new Contact('Contact1', 'contact1@gmail.com', false)

    return (
        <div>
            <div>
                Contact List: 
            </div>
            {/**TODO: add for/map to render a list */}
            <ContactComponent contact={defaultContact1}></ContactComponent>

        </div>
    );
};


export default ContactListComponent;

