import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
// Models
import { ROLES } from '../../../models/roles.enum';

import { User } from '../../../models/user.class';

const RegisterFormik = () => {

    let user = new User();

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '', // To confirm password
        role: ROLES.USER

    }

    const registerSchema = Yup.object().shape(
        {
            username: Yup.string.()
                .min(6, 'username too short')
                .max(12, 'Username too long') 
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid Email format')
                .required('Email is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password",{
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")],
                        'Passwords must match!'
                    )
                }).required('You must confirm the password')
        }
    )

    const submit = () => (
        alert('Register User')
    )

    return (
        <div>
            
        </div>
    );
}

export default RegisterFormik;
