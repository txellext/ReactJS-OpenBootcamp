import React from 'react';
import PropTypes from 'prop-types';
import { useRef } from 'react';



const ContactForm = ({add}) => {

    const nameRef = useRef('');

    function addContact(e){
        e.preventDefault();
        
        const newContact = { name: nameRef.current.value, connected: true }
        
        add(newContact);
        nameRef.current.value = '';
    }



    return (
        <form onSubmit={addContact}>
            <h4>Add Contact: </h4>
            <input
                ref={nameRef}
                type='text'
                required
                autoFocus
                placeholder='Contact Name'
            />
            <button onClick={addContact} type='submit'>Add</button>
        </form>
    );
}

ContactForm.propTypes = {
    add: PropTypes.func.isRequired,
}

export default ContactForm;
