import React from 'react';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-separator"></div>
      <div className="footer-content">
        <div className="footer-links">
          <div className="link-column">
            <h3>CONTACT US</h3>
            <ul>
              <li><a href="#">Email Us</a></li>
              <li><a href="#">Live Chat</a></li>
              <li><a href="#">Store Locator</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>SHIPPING & RETURNS</h3>
            <ul>
              <li><a href="#">Shipping Info</a></li>
              <li><a href="#">Returns Policy</a></li>
              <li><a href="#">Track Order</a></li>
            </ul>
          </div>
          <div className="link-column">
            <h3>ABOUT US</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Sustainability</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 AVOCCO. All rights reserved.</p>
        <div className="social-links">
          <a href="#">INSTAGRAM</a>
          <a href="#">TWITTER</a>
          <a href="#">FACEBOOK</a>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
