
import React from 'react';
import './Test.css'; 

const testimonials = [
  {
    id: 1,
    text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos',
    name: 'John',
    profession: 'Politician',
    image: 'team-1.jpg',
  },
  {
    id: 2,
    text: 'Dolor et et est sed aliquam. Dolor magna ipsum sed est tempor. Magna ipsum aliquyam sed magna dolor clita amet.',
    name: 'Isaac',
    profession: 'Realtor',
    image: 'team-2.jpg',
  },
  {
    id: 3,
    text: 'Dolor et et est sed aliquam. Dolor magna ipsum sed est tempor. Magna ipsum aliquyam sed magna dolor clita amet.',
    name: 'Isaac',
    profession: 'Realtor',
    image: 'team-2.jpg',
  },
  {
    id: 4,
    text: 'Eos vero eos ipsum clita est est. Dolores dolor et duo et kasd. Duo sed amet est amet ipsum magna ipsum dolor est.',
    name: 'Abiola',
    profession: 'Actor',
    image: 'team-3.jpg',
  }
];

const Test = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: '600px' }}>
          <h1 className="mb-3">Our Clients Say!</h1>
          <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
        </div>
        <div className="testimonial-carousel wow fadeInUp">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-item bg-light rounded p-3">
              <div className="bg-white border rounded p-4">
                <p>{testimonial.text}</p>
                <div className="d-flex align-items-center">
                  <img className="img-fluid flex-shrink-0 rounded" src={testimonial.image} alt={testimonial.name} style={{ width: '45px', height: '45px' }} />
                  <div className="ps-3">
                    <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                    <small>{testimonial.profession}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
