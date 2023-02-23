import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../contact.class';

const ContactFormComponent = ({add}) => {

    const nameRef = useRef('');
    const emailRef = useRef('');

    function addContact(e){
        e.preventDefault();
        const newContact = new Contact(
            nameRef.current.value,
            emailRef.current.value,
            false
        );
        add(newContact);
    }

    return (
        <form onSubmit={addContact}>
            <div>
                <p>Name:</p>
                <input ref={nameRef} id='inputName' type='text' required autoFocus placeholder='Contact Name' />
                <p>Email:</p>
                <input ref={emailRef} id='inputEmail' type='email' required placeholder='Contact Email'/>
            </div>
            <button type='submit'> Add Contact</button>
        </form>
    );
}

ContactFormComponent.propTypes = {
    add: PropTypes.func.isRequired,
}

export default ContactFormComponent;
