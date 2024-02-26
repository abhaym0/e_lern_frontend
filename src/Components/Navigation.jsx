import React from 'react';

const Navigation = ({ onCategorySelect }) => {
  const handleCategoryClick = (category) => {
    onCategorySelect(category);
  };

  return (
    <div>
      <ul className='navul'>
        <li><button className='li-btn' onClick={() => handleCategoryClick('ALL COURSES')}>ALL COURSES</button></li>
        <li><button className='li-btn' onClick={() => handleCategoryClick('FRONT-END')}>FRONT-END</button></li>
        <li><button className='li-btn' onClick={() => handleCategoryClick('FRONT-END')}>FRONT-END</button></li>
      </ul> 
    </div>
  );
};

export default Navigation;