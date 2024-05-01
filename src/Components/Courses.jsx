import {Link} from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import Cards from './Cards';
import axios from 'axios';

const Courses = (props) => {
  const [courses, setCourses] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'http://localhost:3001/courses/';
        if (selectedCategory) {
          url = `http://localhost:3001/courses/${selectedCategory}`;
        }
        const response = await axios.get(url);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchData();
  }, [selectedCategory]); // Run effect when selectedCategory changes

  return (
    <div className='courses-container'>
      {/* Render course cards */}
      {courses.map((course) => (
        <Cards
          key={course._id}
          dp={course.dp}
          title={course.title}
          them={course.them}
          instructor={course.instructor}
          accsess={course.accsess}
          _id={course._id}
        />
      ))}
    </div>
  );
};


export default Courses;
