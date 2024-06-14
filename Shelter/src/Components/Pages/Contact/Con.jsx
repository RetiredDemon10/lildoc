
import React from 'react';
import './Con.css'; // Import the external CSS file

const Con = () => {
  return (
    <section className="contact-area">
      <div className="contact-page-wrap">
        <div className="container container-info">
          <div className="row">
            
            <div className="col-lg-6">
              <div className="section-title">
                <h2 className="title">Get in touch.</h2>
                <p>Lorem Ipsum is simply dummy text the printing galley of type <br />and scrambed make type specimen.</p>
              </div>
              <div className="contact-form mb-md-70">
                <form className="contact-form-wrapper" id="contact-form" action="http://whizthemes.com/mail-php/raju/arden/mail.php" method="post">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <input className="form-control" type="text" name="con_name" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input className="form-control" type="email" name="con_email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input className="form-control" type="text" name="con_phone" placeholder="Phone" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <input className="form-control" type="text" name="con_address" placeholder="Address" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea className="form-control" name="con_message" placeholder="Message"></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group mb-0">
                            <button className="btn btn-theme" type="submit">Submit Now <i className="icofont-rounded-double-right mr-0"></i></button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="form-message"></div>
            </div>
            <div className="col-lg-6">
              <div className="contact-info">
                <div className="row">
                  <div className="col-md-4 col-lg-12">
                    <div className="contact-info-item">
                      <div className="icon">
                        <img src="phone.png" alt="Icon" width="35" height="43" />
                      </div>
                      <br></br>
                      <div className="content">
                        <h4>Phone</h4><br></br>
                        <a href="tel://+0058467846">(00) 58 467 846</a>
                        <a href="tel://+88678413975">(88) 678 413 975</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-12">
                    <div className="contact-info-item">
                      <div className="icon">
                        <img src="email.png" alt="Icon" width="30" height="33" />
                      </div>
                      <div className="content">
                        <h4>E-mail</h4>
                        <a href="mailto://example@gmail.com">example@gmail.com</a>
                       
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-12">
                    <div className="contact-info-item mb-0">
                      <div className="icon">
                        <img src="location.png" alt="Icon" width="25" height="40" />
                      </div>
                      <div className="content">
                        <h4>Location</h4>
                        <p>20 Henry Dr <br className="d-none d-lg-block" />Northfield, New Jersey <br className="d-none d-lg-block" />(NJ), 08225</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Con;
