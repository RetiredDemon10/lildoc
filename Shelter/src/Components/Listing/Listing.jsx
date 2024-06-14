import React from 'react';
import './Listing.css'; 

const listings = [
  {
    id: 1,
    title: 'Luxury Apartment',
    image: 'city-3.png'
  },
  {
    id: 2,
    title: 'Modern Apartment',
    image: 'city-2.png'
  },
  {
    id: 3,
    title: 'Cozy Apartment',
    image: 'city-3.png'
  },
  {
    id: 4,
    title: 'Spacious Apartment',
    image: 'city-1.png'
  },
  {
    id: 5,
    title: 'Cozy Apartment',
    image: 'city-4.png'
  },
  {
    id: 6,
    title: 'Cozy Apartment',
    image: 'city-5.png'
  },
  {
    id: 7,
    title: 'Cozy Apartment',
    image: 'city-6.png'
  },


];


const Listing = () => {
  return (
    <div className="listing">
      <h2>Apartment Listings</h2>
      <div className="listing-grid">
        {listings.map(listing => (
          <div key={listing.id} className="listing-card">
            <div className="heart-icon">
              <i className="fas fa-heart"></i>
            </div>
            <div className="image-container">
              <img src={listing.image} alt={listing.title} />
            </div>
            <h3>{listing.title}</h3>
            <a href="#view-more" className="view-more">View More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listing;
