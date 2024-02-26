import React, { useState, useEffect, useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Helpers/AuthContex';

const Comment = ({ id }) => {
    const [refreshPage, setRefreshPage] = useState(false); // State to trigger page refresh
    const { setAuthState } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (refreshPage) {
            // Refresh the page
            window.location.reload();
        }
    }, [refreshPage]);

    const onSubmit = (data) => {
        axios.post(`http://localhost:3001/comment/addComment/${id}`, data, {
            headers: {
                accessToken: localStorage.getItem('accessToken')
            }
        })
        .then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                alert("Comment added successfully");
                setRefreshPage(true); // Set state to trigger page refresh
            }
        })
        .catch((error) => {
            // Handle error if needed
            alert('You are not logged in, Please Login');
            console.error(error);
        });
    };

    const initialValue = { commentText: '' };
    const validationSchema = Yup.object().shape({
        commentText: Yup.string().required(),
    });

    return (
        <div className='form-container'>
            <Formik initialValues={initialValue}
                onSubmit={onSubmit}
                validationSchema={validationSchema}>
                <Form className='form'>
                    <ErrorMessage className='error' name='commentText' component='span' />
                    <Field className='field' id='in' name='commentText' placeholder='Enter a Comment' />
                    <br />
                    <button className='submitbtn' type='submit'>Comment</button>
                </Form>
            </Formik>
        </div>
    );
};

export default Comment;
