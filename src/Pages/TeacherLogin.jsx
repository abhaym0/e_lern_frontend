import React from 'react';
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../Helpers/AuthContex';

const TeacherLogin = () => {

    const initialValue = {
      email: '',
      password: '',
    }
    
    const validationSchema = Yup.object().shape({
      email: Yup.string().required(),
      password: Yup.string().required()
    })
    
    
    const navigate = useNavigate();
    const {setAuthState} = useContext(AuthContext)

    const onSubmit = (data) => {
        axios.post("http://localhost:3001/teacher/login", data)
            .then((response) => {
               if(response.data.error){
                alert(response.data.error);
            }else{
                   localStorage.setItem("accessToken", response.data);
                   navigate('/teacher/panel');
               }
            })
            .catch((error) => {
                // Handle error if needed
                alert('worng pass or username');
                console.error(error);
            });
    }
    return (
        <div className='form-container'>
            <Formik initialValues={initialValue}
                onSubmit={onSubmit}
                validationSchema={validationSchema} >
                <Form className='form'>
                  <h2>Teacher Login</h2>
                    <label className='title'>E-mail</label><br />
                    <ErrorMessage className='error' name='email' component='span'></ErrorMessage>
                    <Field autoComplete="off" className='field'
                        id='in'
                        name='email'
                        placeholder='Enter Email' >
                    </Field><br />
                    <label className='title'>Password</label><br />
                    <ErrorMessage className='error' name='password' component='span'></ErrorMessage>
                    <Field autoComplete="off" className='field'
                        id='in'
                        name='password'
                        placeholder='Enter a password' >
                    </Field><br />
                    <button className='submitbtn' type='submit'>Login</button>
                </Form>
            </Formik>
        </div>
    )
}

export default TeacherLogin
