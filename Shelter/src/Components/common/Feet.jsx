
import React from 'react';
import './Feet.css'; 

const Feet = () => {
  return (
    <footer className="footer position-relative z-index-2">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-sm-6 order-lg-1 order-1">
            <div className="footer-widget">
              <h3 className="footer-widget__title">Shelter Homes</h3>
              <p>We offer a wide range of apartments to fit any budget and lifestyle. From cozy studios to spacious family homes, you'll find a variety of options in desirable neighborhoods.</p>
             
              <ul className="social-media-links d-flex align-items-center mt-3">
                <li>
                  <a href="https://bd.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
              </ul>

            </div>
          </div>
          <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
            <div className="footer-widget">
              <h3 className="footer-widget__title">Support</h3>

              <ul className="short-link-list">
                <li><a href="/faq">Faq</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><a href="/host">Become a Host</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 order-lg-2 order-3">
            <div className="footer-widget">
              <h3 className="footer-widget__title">Quick Links</h3>
              <ul className="short-link-list">
                <li><a href="/register">Register</a></li>
                <li><a href="/listing">Listing</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-sm-6 order-lg-3 order-4">
            <div className="footer-widget">
              <h3 className="footer-widget__title">Pages</h3>
              <ul className="short-link-list">
                <li>
                  <a href="/contact">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="https://prosperity-trust.com/policy/privacy-policy/117">
                    Co Management
                  </a>
                </li>
                <li>
                  <a href="https://prosperity-trust.com/policy/terms-of-service/118">
                    About Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
         
          {/* <div className="col-lg-4 col-sm-6 order-lg-4 order-2">
            <div className="footer-widget">
              <h3 className="footer-widget__title">Contact Us</h3>
              <ul className="footer-info-list">
                <li>
                  <i className="fas fa-map-marked"></i>
                  <p>1452 SE Lagos State, Nigeria</p>
                </li>
                <li>
                  <i className="fas fa-envelope"></i>

                  <p>info@shelterhomes.com</p>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <p>+234 xxxxxx</p>
                </li>
              </ul>
            </div>
          </div> */}

        </div>
        <div className="footer__bottom">
          <div className="row gy-4 align-items-center">
            <div className="col-lg-3 col-sm-6 order-lg-1 text-sm-start order-1 text-center">
              <a className="footer-logo" href="/">
                <img src="logo.png" alt="Logo" />

              </a>
            </div>
            <div className="col-lg-9 col-sm-6 order-lg-3 text-sm-end order-2 text-center">
              <p>Copyright © 2024 Shelter Homes All Right Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Feet;
