import React from 'react';
import { Link } from 'react-router-dom';
import './Location.css'; 

const locations = [
  { id: 1, title: 'Abuja', image: 'city-1.png', link: '/listing' },
  { id: 2, title: 'Lagos', image: '/city-2.png', link: '/listing' },
  { id: 3, title: 'Rivers', image: '/city-3.png', link: '/listing' },
  { id: 4, title: 'Kano', image: 'city-4.png', link: '/listing' },
  // i am pointing to only 1 listing for now /listing/abuja will be for abuja
];


const Location = () => {
  return (
    <div className="location-grid">
        <h1> Explore our Various location</h1>
      {locations.map(location => (
        <Link key={location.id} to={location.link} className="location-card">
          <div className="location-card-content">
            <img src={location.image} alt={location.title} className="location-image" />
            <div className="location-title">{location.title}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Location;
