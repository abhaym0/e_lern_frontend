// Videos.jsx

import React from 'react';

const Video = ({ lecture, index, onVideoClick }) => {
  return (
    <div className="video-card" onClick={() => onVideoClick(lecture.url)}>
      <div className="video-card-image">
        <img src={lecture.dp} alt={`Video Lecture ${index + 1}`} />
      </div>
      <div className="video-title">
        <h3 className="">{lecture.title}</h3>
      </div>
    </div>
  );
};

const Videos = ({ lectures = [], onVideoClick }) => {
  return (
    <div>
      {lectures.map((lecture, index) => (
        <Video key={index} lecture={lecture} index={index} onVideoClick={onVideoClick} />
      ))}
    </div>
  );
};

export default Videos;
