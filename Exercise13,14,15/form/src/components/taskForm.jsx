import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const taskSchema = Yup.object().shape(
    {
        name: Yup.string()
            .required('Name Task is required'),
        description: Yup.string()
            .required('Description Task is required')

    }
);


const TaskForm = () => {

    const initialInfo = {
        name: '',
        description: '',
    }

    return (
        <div>
            <h1>Task Form</h1>
            <Formik
                // *** Initial values that form will take *** 
                initialValues= { initialInfo }
                // *** Yup ValidationSchema ***
                validationSchema= { taskSchema }
                // *** onSubmit Event ***         
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 1000));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {/* Props from Formik */}
                {({values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur }) => (
                        <Form>
                            <label htmlFor="name">Name Task</label>
                            <Field id="name" type="text" name="name" placeholder="Task name" />

                            {/*Name Errors */}
                            {
                                errors.name && touched.name &&
                                (
                                    <ErrorMessage name="name" component='div'></ErrorMessage>
                                )
                            }

                            <label htmlFor="description">Description Task</label>
                            <Field id="description" type="text" name="description" placeholder="Description Task" />

                            {/*Description Errors */}
                            {
                                errors.description && touched.description &&
                                (
                                    <ErrorMessage name="description" component='div'></ErrorMessage>
                                )
                            }

                            <button type="submit">Add Task</button>
                            {isSubmitting ? (<p>Adding Task...</p>) : null }
                        </Form>

                    )
                }
            </Formik>
        </div>
    );
}

export default TaskForm;
