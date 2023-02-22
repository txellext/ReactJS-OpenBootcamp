import React, { useState, useEffect } from 'react';
import { Contact } from '../../contact.class';
import ContactComponent from '../pure/contactComponent';

const ContactListComponent = () => {

    const defaultContact1 = new Contact('Contact1', 'contact1@gmail.com', false)
    const defaultContact2 = new Contact('Contact2', 'contact2@gmail.com', true)
    const defaultContact3 = new Contact('Contact3', 'contact3@gmail.com', false)

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2, defaultContact3]);

    useEffect(() => {
        console.log('Contact list state modified')
        return () => {
            console.log('ContactListComponent is going to unmount...')
        };
    }, [contacts]);

    function connectedContact(contact){
        console.log('Connected Contact: ', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);

    }


    function deleteContact(contact){
        console.log('Deleted Contact: ', contact);
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index,1);
        setContacts(tempContacts);


        

    }

    return (
        <div>
            <h1>
                Contact List: 
            </h1>
            <div className='card-container'>
                {contacts.map((contact,index) => {
                    return(
                            <ContactComponent 
                            key={index} 
                            contact={contact}
                            connected={connectedContact}
                            deleted={deleteContact}>
                            </ContactComponent>
                        )
                    } 
                )}

            </div>
        </div>
    );
};


export default ContactListComponent;

