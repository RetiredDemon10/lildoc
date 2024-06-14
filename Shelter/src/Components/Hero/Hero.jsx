import React from 'react'
import './hero.css'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';








const Hero = () => {
  return (
    <div className="hero">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div className="slide">
          <img src='hero.png' alt="Slide 1" />
          <div className="slide-content">
            <h1 className="slide-title">Find Your Dream Apartments</h1>
            <p className="slide-subtitle">Spacious living, perfect location. Browse our listings for apartments that offer ample room and a vibrant neighborhood to match your lifestyle.</p>
          </div>
        </div>

        <div className="slide">
          <img src='hero1.png' alt="Slide 2" />
          <div className="slide-content">
            <h1 className="slide-title">Move-In Ready Apartments</h1>
            <p className="slide-subtitle">Start your new chapter today. Skip the wait and move right in! We have a selection of apartments that are move-in ready, allowing you to begin your new adventure without delay.</p>
          </div>
        </div>
        <div className="slide">
          <img src='about-us.png' alt="Slide 3" />
          <div className="slide-content">
            <h1 className="slide-title">Explore Diverse Neighborhoods</h1>
            <p className="slide-subtitle">Discover your ideal community. From bustling city centers to charming suburbs, find an apartment in a neighborhood that complements your personality and interests.</p>
          </div>
        </div>
      </Carousel>
    </div>
  )
}


export default Hero