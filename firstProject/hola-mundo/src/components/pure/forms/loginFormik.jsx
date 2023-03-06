import React from 'react';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('InvalidEmail format')
            .required('Email is required'),
        password: Yup.string()
            .required('Password i s required')    
    }
);



const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: '',
    }



    return (
        <div>
            <h1>Login Formik</h1>
            <Formik
                // *** Initial values that form will take ***
                initialValues={ initialCredentials }  
                // *** Yup Validation Schema ***
                validationSchema = { loginSchema }  
                // *** onSubmit Event ***         
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}               
            >

                {/** We obtain props from Formik */}
                
                { props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                    } = props;

                    return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="example@email.com" />

                            <label htmlFor="password">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="password"
                                type="password"
                            />
                            <button type="submit">Login</button>
                        </Form>
                   )
                }}


            </Formik>
        </div>
    );
}

export default LoginFormik;
