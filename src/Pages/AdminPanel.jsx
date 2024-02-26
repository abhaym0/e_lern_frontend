import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import Singup from './Singup';
import UserCreate from '../Components/UserCreate';
import { useNavigate } from 'react-router-dom';

const AdminPanel = () => {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  };
  const navigater = useNavigate();

  if (!localStorage.getItem('accessToken')) {
    navigater('/admin/login');
  } else {
    let data = 'heryasd'
    const Token = localStorage.getItem('accessToken');
    axios.post("http://localhost:3001/admin/isAdmin", data, {
      headers: {
        accessToken: Token
      }
    }).then((response) => {
      console.log('admin workingg');

    }).catch((err) => {
      console.log('you might not be admin')
    })
  }

  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/teacher/all');
        setTeachers(response.data);
      } catch (error) {
        console.error('Failed to fetch teachers:', error);
      }
    };

    fetchTeachers();
  }, []);

  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const response = await axios.get('http://localhost:3001/admin/admins');
        setAdmins(response.data);
      } catch (error) {
        console.error('Failed to fetch admins:', error);
      }
    };

    fetchAdmins();
  }, []);

  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3001/user');
        setUsers(response.data);
      } catch (error) {
        console.error('Failed to fetch users:', error);
      }
    };

    fetchUsers();
  }, []);

  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('http://localhost:3001/courses');
        setCourses(response.data);
      } catch (error) {
        console.error('Failed to fetch courses:', error);
      }
    };

    fetchCourses();
  }, []);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required')
  });

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await axios.post('http://localhost:3001/teacher/create', values);
      console.log(response.data);
      alert('Teacher account created successfully');
      resetForm();
    } catch (error) {
      console.error('Failed to create teacher account:', error);
      alert('Failed to create teacher account');
    } finally {
      setSubmitting(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/user/${id}`);
      console.log('User deleted successfully');
      setUsers(users.filter(user => user._id !== id));
    } catch (error) {
      console.error('Failed to delete user:', error);
      alert('Failed to delete user');
    }
  };

  const deleteCourse = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/courses/${id}`);
      console.log('Course deleted successfully');
      setCourses(courses.filter(course => course._id !== id));
    } catch (error) {
      console.error('Failed to delete course:', error);
      alert('Failed to delete course');
    }
  };

  const deleteTeacher = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/teacher/${id}`);
      console.log('Teacher deleted successfully');
      setTeachers(teachers.filter(teacher => teacher._id !== id));
    } catch (error) {
      console.error('Failed to delete teacher:', error);
      alert('Failed to delete teacher');
    }
  };

  const logout = () => {
    localStorage.removeItem('accessToken');
    navigater('/admin/login');
  };

  const [showDeleteButton, setShowDeleteButton] = useState([]);
  useEffect(() => {
    // Initialize showDeleteButton state with an array of false values
    setShowDeleteButton(Array(users.length).fill(false));
  }, [users]); // Update the state when the users array changes
  return (
    <div className='admin-panel'>
      <div className="admin-header">
        <span>Admin Panel</span>
        <button className='admin-logout' onClick={logout}>LogOut</button>
      </div>
      <div className="admin-main">
        <div className='form-contianer-admin'>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ isSubmitting }) => (
              <Form className='form1'>
                <h3>Create Teacher Account</h3>
                <div>
                  <label className='title' htmlFor="firstName">First Name:</label><br />
                  <Field autoComplete="off" placeholder='Enter First name' className='field' type="text" id="firstName" name="firstName" />
                  <ErrorMessage name="firstName" component="div" className="error" />
                </div>
                <div>
                  <label className='title' htmlFor="lastName">Last Name:</label><br />
                  <Field autoComplete="off" placeholder='Enter last name' className='field' type="text" id="lastName" name="lastName" />
                  <ErrorMessage name="lastName" component="div" className="error" />
                </div>
                <div>
                  <label className='title' htmlFor="email">Email:</label><br />
                  <Field autoComplete="off" placeholder='Enter email' className='field' type="email" id="email" name="email" />
                  <ErrorMessage name="email" component="div" className="error" />
                </div>
                <div>
                  <label className='title' htmlFor="password">Password:</label><br />
                  <Field autoComplete="off" placeholder='Enter passowrd' className='field' type="password" id="password" name="password" />
                  <ErrorMessage name="password" component="div" className="error" />
                </div>
                <button className='submitbtn' type="submit" disabled={isSubmitting}>Create Account</button>
              </Form>
            )}
          </Formik>
        </div>
        <UserCreate></UserCreate>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form className='form1'>
              <h3>Create Admin Account</h3>
              <div>
                <label className='title' htmlFor="firstName">First Name:</label><br />
                <Field autoComplete="off" placeholder='Enter First name' className='field' type="text" id="firstName" name="firstName" />
                <ErrorMessage name="firstName" component="div" className="error" />
              </div>
              <div>
                <label className='title' htmlFor="lastName">Last Name:</label><br />
                <Field autoComplete="off" placeholder='Enter last name' className='field' type="text" id="lastName" name="lastName" />
                <ErrorMessage name="lastName" component="div" className="error" />
              </div>
              <div>
                <label className='title' htmlFor="email">Email:</label><br />
                <Field autoComplete="off" placeholder='Enter email' className='field' type="email" id="email" name="email" />
                <ErrorMessage name="email" component="div" className="error" />
              </div>
              <div>
                <label className='title' htmlFor="password">Password:</label><br />
                <Field autoComplete="off" placeholder='Enter passowrd' className='field' type="password" id="password" name="password" />
                <ErrorMessage name="password" component="div" className="error" />
              </div>
              <button className='submitbtn' type="submit" disabled={isSubmitting}>Create Account</button>
            </Form>
          )}
        </Formik>
      </div>
      <div>

      </div>
      <div className="page2">
        <div className="teacher-list">
          <div className='teachers'>
            <div className='list-header'>
              <h2>List of Teachers</h2>
            </div>
            <div className='teacher-info'>
              {teachers.map((teacher, index) => (
                <div key={index} className='teacher-info'>
                  <h3>{teacher.firstName} {teacher.lastName}</h3>
                  <h4>{teacher.email}</h4>
                  <button className='delete-btn' onClick={() => deleteTeacher(teacher._id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="user-list">
          <div className='teachers'>
            <div className='list-header'>
              <h2>List of User</h2>
            </div>
            <div className='teacher-info'>
              {users.map((users, index) => (
                <div key={index} className='teacher-info'>
                  <h3> {users.username}</h3>
                  <h4>{users.email}</h4>
                  <button className='delete-btn' onClick={() => deleteUser(users._id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='courses'>
          <div className='teachers'>
            <div className='list-header'>
              <h2>List of Courses</h2>
            </div>
            <div className='teacher-info'>
              {courses.map((courses, index) => (
                <div key={index} className='teacher-info'>
                  <h3>{courses.title}</h3>
                  <h4>Instructor: {courses.instructor}</h4>
                  CourseID: <h5>{courses._id}</h5>
                  <button className='delete-btn' onClick={() => deleteCourse(courses._id)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className='teachers'>
            <div className='list-header'>
              <h2>List of Admins</h2>
            </div>
            <div className='teacher-info'>
              {admins.map((admins, index) => (
                <div key={index} className='teacher-info'>
                  <h3>{admins.email}</h3>
                  <h4>Admin Name: {admins.username}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
