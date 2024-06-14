import React from 'react';
import './Testimonial.css';
import 'animate.css';



const staticImage = 'presence.png'
const testimonials = [
  {
    name: 'John Doe',
    company: 'Company XYZ',
    description: 'This is a sample testimonial text from John Doe.',
    image: 'team-1.jpg',
  },
  {
    name: 'Jane Smith',
    company: 'Acme Inc.',
    description: 'This is a sample testimonial text from Jane Smith.',
    image: 'team-2.jpg',
  },
  // {
  //   name: 'Jane Smith',
  //   company: 'Acme Inc.',
  //   description: 'This is a sample testimonial text from Jane Smith.',
  //   image: 'testimonial1.png',
  // },
  // {
  //   name: 'Jane Smith',
  //   company: 'Acme Inc.',
  //   description: 'This is a sample testimonial text from Jane Smith.',
  //   image: 'testimonial1.png',
  // },


];

const App = () => {
  return (
    <div>
  
   
    <div className="testimonials-grid">
      

      <div className="left-column">
      
      <h1 className="animate__animated animate__bounce">What Our Client Say</h1>
        <img src={staticImage} alt="Static Image" />
        
      </div>
      <div className="right-column">
        {testimonials.map((testimonialData, index) => (
          <Testimonial key={index} data={testimonialData} />
        ))}
      </div>
    </div>
    </div>
  );
};

const Testimonial = ({ data }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={data.image} alt="Testimonial" />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-text">{`"${data.description}"`}</p>
        <p className="testimonial-author">
          - {data.name}

        </p>
      </div>
    </div>
  );
};

export default App;