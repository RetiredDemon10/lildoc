import React from 'react';
import './Liii.css'; // Import the external CSS file

const Liii = () => {
  const properties = [
    {
      id: 1,
      price: 'N32,345',
      image: 'city-1.png',
      description: 'Golden Urban House',
      location: '123 Street, Abuja,',
      sqft: '1000 Sqft',
      bed: '3 Beds',
      bath: '3 Bath',
      area: 'Abuja'

    },
    {
      id: 2,
      price: 'N22,345',
      image: 'city-2.png',
      description: 'Modern Family Home',
      location: '456 Avenue, Lagos',
      sqft: '1500 Sqft',
      bed: '4 Bed',
      bath: '2 Bath',
      area: 'Lagos'
    },
    {
      id: 3,
      price: 'N32,345',
      image: 'city-3.png',
      description: 'Luxury Villa with Pool',
      location: '789 Trans Amadi, PH',
      sqft: '2000 Sqft',
      bed: '1 Bed',
      bath: '1 Bath',
      area: 'Rivers'
    }

  ];


  return (
    <div className="row">
      {properties.map((property) => (
        <div key={property.id} className="col-lg-4 col-md-6">
          <div className="property-item rounded overflow-hidden">
      
            <div className="position-relative overflow-hidden">
              <a href="/listing"><img className="img-fluid" src={property.image} alt="Property" /></a>
              <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">{property.area}</div>
              {/* <div className="bg-primary rounded-top text-white position-absolute start-0 bottom-0 mx-4 pt-1 px-3">Home</div> */}
            </div>
            <div className="p-4 pb-0">
              <h5 className="text-red mb-3">{property.price}</h5>
              <a className="d-block text-red h5 mb-2" href="#">{property.description}</a>
              <p><i className="fa fa-map-marker-alt text-white me-2"></i>{property.location}</p>
            </div>
            <div className="d-flex border-top">
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-ruler-combined text-white me-2"></i>{property.sqft}</small>
              <small className="flex-fill text-center border-end py-2"><i className="fa fa-bed text-white me-2"></i>{property.bed}</small>
              <small className="flex-fill text-center py-2"><i className="fa fa-bath text-white me-2"></i>{property.bath}</small>
              
            </div>
            {/* <div ClassName="container">
              <button ClassName="viewMore">View</button>
           </div> */}
          </div>
         
        </div>
       
      ))}
    
    </div>
  );
};

export default Liii;
