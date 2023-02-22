import React, { useState, useEffect } from 'react';
import { Contact } from '../../contact.class';
import ContactComponent from '../pure/contactComponent';

const ContactListComponent = () => {

    const defaultContact1 = new Contact('Contact1', 'contact1@gmail.com', false)
    const defaultContact2 = new Contact('Contact2', 'contact2@gmail.com', true)
    const defaultContact3 = new Contact('Contact3', 'contact3@gmail.com', false)

    const [contacts, setContact] = useState([defaultContact1]);

    useEffect(() => {
        console.log('Contact state modified')
        return () => {
            console.log('ContactListComponent is going to unmount...')
        };
    }, [contacts]);

    const changeConnected = (id) => {
        console.log('TODO: Change connected of a contact')
    }


    return (
        <div>
            <div>
                <h1>
                    Contact List: 
                </h1>
            </div>
            {/**TODO: add for/map to render a list */}
            <ContactComponent contact={defaultContact1}></ContactComponent>

        </div>
    );
};


export default ContactListComponent;

