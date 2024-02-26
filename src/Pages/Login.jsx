import React from 'react';
import { Formik, Form, Field, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import Navbar from '../Components/Navbar';

const Login = () => {

    const initialValue = {
        username: '',
        password: '',
    }

    const validationSchema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().required()
    })


    const onSubmit = (data) => {
        axios.post("http://localhost:3001/user/login", data)
            .then((response) => {
               if(response.data.error){
                alert(response.data.error);
            }else{
                   localStorage.setItem("accessToken", response.data);
                   navigate('/userui');
               }
            })
            .catch((error) => {
                // Handle error if needed
                alert('worng pass or username');
                console.error(error);
            });
    }
    const signUp = ()=>{
        navigate('/signup')
    }
    const navigate = useNavigate();
    return (
        <div>
            
            <Navbar></Navbar>
        <div className='form-container'>
            <Formik initialValues={initialValue}
                onSubmit={onSubmit}
                validationSchema={validationSchema} >
                <Form className='form'>
                    <h2 className='header-n'>Login</h2>
                    <label className='title'>Username</label><br />
                    <ErrorMessage className='error' name='username' component='span'></ErrorMessage>
                    <Field autoComplete="off" className='field'
                        id='in'
                        name='username'
                        placeholder='Enter a Username' >
                    </Field><br />
                    <label className='title'>Password</label><br />
                    <ErrorMessage className='error' name='password' component='span'></ErrorMessage>
                    <Field autoComplete="off" className='field'
                        type='password'
                        id='in'
                        name='password'
                        placeholder='Enter a password' >
                    </Field><br />
                    <button className='submitbtn' type='submit'>Login</button>
                    <span>OR</span>
                    <button onClick={signUp} className='submitbtn2'>Sign Up</button>
                </Form>
            </Formik>
        </div>
     </div> 
    )
}

export default Login
