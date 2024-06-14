import React from 'react';
import './Featured.css'; // Import the external CSS file

const apartments = [
  {
    id: 1,
    title: 'Luxury Apartment',
    description: 'A beautiful luxury apartment in the city center.',
    image: 'city-3.png'
    
  },
  {
    id: 2,
    title: 'Modern Apartment',
    description: 'A modern apartment with all the latest amenities.',
    image: 'city-2.png'
  },
  {
    id: 3,
    title: 'Modern Apartment',
    description: 'A modern apartment with all the latest amenities.',
    image: 'p-2.png'
  },
  {
    id: 4,
    title: 'Cozy Apartment',
    description: 'A cozy apartment perfect for small families.',
    image: 'city-1.png'
  },
  // Add more apartments as needed
];

const Featured = () => {
  return (
    <div className="featured">
      <h2>Featured Apartments</h2>
      <div className="featured-grid">
        {apartments.map(apartment => (
          <div key={apartment.id} className="featured-card">
            <div className="image-container">
              <img src={apartment.image} alt={apartment.title} />
            </div>
            <h3>{apartment.title}</h3>
            <p>{apartment.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Featured;
