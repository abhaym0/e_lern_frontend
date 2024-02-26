import React from 'react'

const EnrolledCard = ({dp, title, them, instructor}) => {
  return (
    <div className='card'>
      <div className="card-con">
        <div className='card-head'>
          <img src={dp} alt="Course Thumbnail" />
        </div>
        <div className='card-body'>
          <h3>{title}</h3>
          <p className='s1'>{them}</p>
        </div>
        <div className='card-footer-en'>
            <div className='cf-1'>
            <p className='p'>Instructor</p>
            <p className='p'>{instructor}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnrolledCard
