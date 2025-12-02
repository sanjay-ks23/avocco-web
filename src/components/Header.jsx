import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-new.png';

import '../styles/Header.css';
import '../styles/HeaderMobile.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      if (currentScrollY > heroHeight) {
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`header ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="header-container">
          <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </button>

          <div className="logo-section">
            <img src={logo} alt="Avocco Logo" className="logo" />
          </div>

          <nav className="nav-menu">
            <ul>
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/zfly">ZFLY</Link></li>
              <li><a href="#colibri">COLIBRI</a></li>
              <li><a href="#icon">ICON</a></li>
            </ul>
          </nav>

          <div className="header-icons">
            <button aria-label="Search" className="icon-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
            <button aria-label="Cart" className="icon-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={toggleMobileMenu}>HOME</Link></li>
          <li><Link to="/zfly" onClick={toggleMobileMenu}>ZFLY</Link></li>
          <li><a href="#colibri" onClick={toggleMobileMenu}>COLIBRI</a></li>
          <li><a href="#icon" onClick={toggleMobileMenu}>ICON</a></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
