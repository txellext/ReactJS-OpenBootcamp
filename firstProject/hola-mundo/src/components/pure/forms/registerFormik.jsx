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

    // Validation schema: object mathcing initialvalues
    const registerSchema = Yup.object().shape(
        {
            username: Yup.string()
                .min(6, 'username too short')
                .max(12, 'Username too long') 
                .required('Username is required'),
            email: Yup.string()
                .email('Invalid Email format')
                .required('Email is required'),
            // role: Yup.string()
            //     .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a role: User/Admin')
            //     .required('Role is required'),
            password: Yup.string()
                .min(8, 'Password too short')
                .required('Password is required'),
            confirm: Yup.string()
                .when("password",{
                    is: value => (value && value.length > 0 ? true : false),
                    then: Yup.string().oneOf(
                        [Yup.ref("password")], // Check password is inside the list
                        'Passwords must match!' // Not in the list, then show error message
                    )
                }).required('You must confirm the password')
        }
    )

    const submit = (values) => {
        alert('Register User')
    }   

    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                initialValues = {initialValues}
                // *** Yup Validation Schema ***
                validationSchema = {registerSchema}  

                // *** onSubmit Event ***         
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2))
                }}
            >
            {/** We obtain props from Formik */}

            {({ values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="username">Username</label>
                            <Field id="username" type="text" name="username" placeholder="Your username" />
                            
                            {/*Username Errors */}
                            {
                                errors.username && touched.username &&
                                (
                                    <ErrorMessage name="username" component='div'></ErrorMessage> 
                                )                                   
                            }

                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />
                            
                            {/*Email Errors */}
                            {
                                errors.email && touched.email &&
                                (
                                    <ErrorMessage name="email" component='div'></ErrorMessage> 
                                )                                   
                            }


                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />
                            {/*Password Errors */}
                            {
                                errors.password && touched.password &&
                                (
                                    <ErrorMessage name="password" component='div'></ErrorMessage> 
                                )
                            }

                            <label htmlFor="confirm">Confirm Password</label>
                            <Field
                                id="confirm"
                                name="confirm"
                                placeholder="confirm password"
                                type="password"
                            />
                            {/*Confirm Password Errors */}
                            {
                                errors.confirm && touched.confirm &&
                                (
                                    <ErrorMessage name="confirm" component='div'></ErrorMessage> 
                                )
                            }     

                            <button type="submit">Register Account</button>
                            {isSubmitting ? (<p>Sending your credentials...</p>): null }

                        </Form>
                    )
            }
            </Formik>
            
        </div>
    );
}

export default RegisterFormik;
