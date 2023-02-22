import React, { useState } from 'react';
import ContactForm from '../pure/form/contactForm';
import { Contact } from '../../contact.class';
import PropTypes from 'prop-types';

const ContactList = ({contact}) => {

    const defaultContact1 = new Contact('Contact1', true );
    const defaultContact2 = new Contact('Contact2', false );

    const [contacts, setContacts] = useState([defaultContact1, defaultContact2]);


   function changeContactState(contact){
    console.log('Contact added: ', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts[index].connected = !tempContacts[index].connected;
    setContacts(tempContacts);
   }

   function removeContact(contact){
    console.log('Contact removed: ', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.splice(index,1);
    setContacts(tempContacts);
   }

   function addContact(contact){
    console.log('Add this Contact: ', contact);
    const index = contacts.indexOf(contact);
    const tempContacts = [...contacts];
    tempContacts.push(contact);
    setContacts(tempContacts);
   }

    return (
        <div>
            <h3> Contact List:</h3>
            <p>Name: {contact.name} </p>
            <p>Status: {contact.online}</p>
            <button onClick={() => removeContact(contact)}>Delete contact</button>
            <button onClick={() => changeContactState(contact)}>Change State</button>
            <ContactForm add={addContact}></ContactForm>
        </div>
    );
}

ContactList.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired
};

export default ContactList;
