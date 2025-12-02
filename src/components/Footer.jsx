import React from 'react';

import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          {/* Column 1: PRODUCTS */}
          <div className="link-column">
            <h3>PRODUCTS</h3>
            <ul>
              <li><a href="#">Footwear</a></li>
              <li><a href="#">Clothing</a></li>
              <li><a href="#">Accessories</a></li>
              <li><a href="#">Outlet - Sale</a></li>
              <li><a href="#">New Arrivals</a></li>
            </ul>
          </div>

          {/* Column 2: SPORTS */}
          <div className="link-column">
            <h3>SPORTS</h3>
            <ul>
              <li><a href="#">Running</a></li>
              <li><a href="#">Training</a></li>
              <li><a href="#">Trail</a></li>
              <li><a href="#">Football</a></li>
              <li><a href="#">Cricket</a></li>
            </ul>
          </div>

          {/* Column 3: COLLECTIONS */}
          <div className="link-column">
            <h3>COLLECTIONS</h3>
            <ul>
              <li><a href="#">ZFly Series</a></li>
              <li><a href="#">Icon Series</a></li>
              <li><a href="#">Colibri Series</a></li>
              <li><a href="#">Ultraboost</a></li>
              <li><a href="#">NMD</a></li>
            </ul>
          </div>

          {/* Column 4: SUPPORT */}
          <div className="link-column">
            <h3>SUPPORT</h3>
            <ul>
              <li><a href="#">Help</a></li>
              <li><a href="#">Returns & Exchanges</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Order Tracker</a></li>
              <li><a href="#">Store Finder</a></li>
            </ul>
          </div>

          {/* Column 5: COMPANY INFO */}
          <div className="link-column">
            <h3>COMPANY INFO</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
              <li><a href="#">Avocco Stories</a></li>
            </ul>
          </div>

          {/* Column 6: FOLLOW US */}
          <div className="link-column">
            <h3>FOLLOW US</h3>
            <div className="social-links">
              <a href="#" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-links">
          <a href="#">Cookie Settings</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
          <a href="#">Cookies</a>
        </div>
        <p>&copy; 2024 AVOCCO India Marketing Pvt. Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
