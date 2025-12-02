import React from 'react';
import heroBg from '../assets/hero-bg.png';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <link href="https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@500;900&display=swap" rel="stylesheet" />

      <div className="video-background">
        <img src={heroBg} alt="Background" className="hero-video" />
        <div className="overlay"></div>
      </div>

      <div className="hero-content">
        <div className="text-container">
          <h1 className="hero-title">WIDE IS FAR</h1>
          <div className="title-underline"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
