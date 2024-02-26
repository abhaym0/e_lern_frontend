import React from 'react';

const Video = ({ video, onVideoClick }) => {
  return (
    <div className="video-card" onClick={() => onVideoClick(video.url)}>
      <img src={video.dp} alt={video.title} />
      <h3>{video.title}</h3>
    </div>
  );
};

export default Video;
