import React from 'react'
import { Formik, Form, Field, ErrorMessage,  } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const UserCreate = () => {

    const navigate = useNavigate();

    const initialValue = {
        username: '',
        password: '',
        email: '',
        fullname: ''
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(6).max(20).required(),
        email: Yup.string().required(),
        fullname: Yup.string().min(3).max(15).required()
    })


    const onSubmit = (data) => {
        axios.post("http://localhost:3001/user/auth", data)
        .then((response) => {
            console.log("succsess");
        })
        .catch((error) => {
            // Handle error if needed
            console.error(error);
            console.log('wrong id or password');
        });
    }
    return (
        <div className='form-container-admin'>
            <Formik initialValues={initialValue}
                onSubmit={onSubmit}
                validationSchema={validationSchema} >
                <Form className='form'>
                    <h3>Create User Account</h3>
                    <label className='title'>Username</label><br />
                    <ErrorMessage className='error' name='username' component='span'></ErrorMessage>
                    <Field autoComplete="off" className='field'
                        id='in'
                        name='username'
                        placeholder='Enter a Username' >
                    </Field><br />
                    <label className='title'>Password</label><br />
                    <ErrorMessage className='error'name='password' component='span'></ErrorMessage>
                    <Field autoComplete="off" className='field'
                        type='password'
                        id='in'
                        name='password'
                        placeholder='Enter a password' >
                    </Field><br />
                    <label className='title'>E-mail</label><br />
                    <ErrorMessage className='error' name='email' component='span'></ErrorMessage>
                    <Field autoComplete="off" className='field'
                        id='in'
                        name='email'
                        placeholder='Enter a Email' >
                    </Field><br />
                    <label className='title'>Full Name</label><br />
                    <ErrorMessage className='error'name='fullname' component='span'></ErrorMessage>
                    <Field autoComplete="off" className='field'
                        id='in'
                        name='fullname'
                        placeholder='Enter your Full name' >
                    </Field><br />
                    <button className='submitbtn' type='submit'>Create Account</button>
                </Form>
            </Formik>
            
        </div>
    )
}

export default UserCreate
