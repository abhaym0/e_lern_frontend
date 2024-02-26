import React from 'react';
import { useNavigate } from 'react-router-dom';
import Terms from '../Pages/Terms';
import { motion } from 'framer-motion';

const Cards = ({ dp, title, them, instructor, accsess, _id }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    if(accsess){
      navigate(`/course/${_id}`); // Navigate to the terms page with the _id as a parameter
    }else{
      navigate('/pur')
      localStorage.setItem("ID",`${_id}`)
      localStorage.setItem("CourseName",`${title}`)
    }
  };
  const isVisable = false

  return (
    <motion.div
      whileHover={{ scale: [null, 1.06, 1.005] }}
      transition={{ duration: 0.3 }}
      className='card' onClick={handleCardClick}>
      <div className="card-con">
        <div className='card-head'>
          <img src={dp} alt="Course Thumbnail" />
        </div>
        <div className='card-body'>
          <h3>{title}</h3>
          <p className='s1'>{them}</p>
        </div>
        <div className='card-footer'>
          <div className='cf-1'>
            <p className='p'>Instructor</p>
            <p className='p'>{instructor}</p>
          </div>
          <div className='cf-2'>
            <p>Access</p>
            <p>{accsess ? 'Free Course' : 'Paid'}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Cards;
