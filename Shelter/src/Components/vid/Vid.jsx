import React from 'react';
import './Vid.css';

const Vid = () => {
  return (
    <div className="vid-container">
      <div className="vid-left">
        <video className="vid-video" controls>
          <source src="house.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="vid-right">
        <h2 className="vid-title">Beautiful Homes</h2>
        <p className="vid-subtitle">Video Subtitle</p>
      </div>
    </div>
  );
};

export default Vid;