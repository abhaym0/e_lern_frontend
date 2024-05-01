import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Courses from '../Components/Courses';
import Featuresbar from '../Components/Featuresbar';
import Navigation from '../Components/Navigation';
import { motion } from 'framer-motion';
import Transition from '../Components/Transition';
import axios from 'axios';

const Userui = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL COURSES');

  // Function to handle course selection from Navigation
  const  handleCategorySelect = async(category) => {
    await setSelectedCategory(category);
    // console.log(category);
  };

  if (localStorage.getItem('accessToken')) {
    const data = ''
    useEffect(() => {
      axios.post('http://localhost:3001/user/purchasedCourses',data,
      {
        headers:{
          accessToken: localStorage.getItem('accessToken')
        }
      })
        .then((res) => {
          console.log(res.data)
          res.data.map((val)=>{
            localStorage.setItem('purchasedCourses',val.courseId)
          })
          const purchasedCourses = res.data.map((course) => {
            return course.courseId;
          });
          // console.log(purchasedCourses)
        })
        .catch((err) => {
          console.log(err);
        });
    }, [])
  }

  return (
    <div className='userui'>
      <Featuresbar />
      <h1>COURSES</h1>
      {/* Pass handleCategorySelect function to Navigation */}
      <Navigation onCategorySelect={handleCategorySelect} />
      {/* Render Courses component with filtered courses */}
      <Courses selectedCategory={selectedCategory} />
    </div>
  );
};

export default Userui;
