import React from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Footer.css';

const Footer = () => {
  const { theme } = useTheme();

  return (
    <footer className={`footer ${theme}-theme`}>
      <div className="footer-content">
        <div className="footer-links">
          {/* Column 1: SPORTS */}
          <div className="link-column">
            <h3>SPORTS</h3>
            <ul>
              <li><a href="#">Hiking</a></li>
              <li><a href="#">Running</a></li>
              <li><a href="#">Athletics</a></li>
              <li><a href="#">Strength Training</a></li>
            </ul>
          </div>

          {/* Column 2: COLLECTIONS */}
          <div className="link-column">
            <h3>COLLECTIONS</h3>
            <ul>
              <li><a href="#">ZFly Series</a></li>
              <li><a href="#">Icon Series</a></li>
              <li><a href="#">Colibri Series</a></li>
            </ul>
          </div>

          {/* Column 3: COMPANY INFO */}
          <div className="link-column">
            <h3>COMPANY INFO</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li className="contact-item">
                <a href="mailto:info@avocco.com" aria-label="Contact" className="contact-link">
                  <span>Contact</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: FOLLOW US */}
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
              <a href="#" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 AVOCCO India Marketing Pvt. Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
