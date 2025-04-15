import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>HealthSpot</h5>
            <p>Your trusted healthcare partner connecting patients with top medical professionals.</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/about" className="text-white">About Us</a></li>
              <li><a href="/doctors" className="text-white">Our Doctors</a></li>
              <li><a href="/contact" className="text-white">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              <p><i className="fas fa-map-marker-alt me-2"></i> 123 Medical Center Dr, Harare, Zimbabwe</p>
              <p><i className="fas fa-phone me-2"></i> (263) 555-0123</p>
              <p><i className="fas fa-envelope me-2"></i> info@healthspot.com</p>
            </address>
          </div>
        </div>
        <hr className="my-4 bg-light" />
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} HealthSpot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;