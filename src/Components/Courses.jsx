import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';

const Courses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/courses/');
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='courses-container'>
      {courses.map((course) => (
        <Cards
        key={course._id}
        dp={course.dp}
        title={course.title}
        them={course.them}
        instructor={course.instructor}
        accsess={course.accsess}
        _id={course._id}  // Ensure _id is passed
        />
      ))}
    </div>
  );
}

export default Courses;
