import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Courses from '../Components/Courses';
import Featuresbar from '../Components/Featuresbar';
import Navigation from '../Components/Navigation';
import { motion } from 'framer-motion';
import Transition from '../Components/Transition';

const Userui = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL COURSES');

  // Function to handle course selection from Navigation
  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

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
