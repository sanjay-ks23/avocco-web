import React from 'react';
import heroBg from '../assets/hero-bg.png';

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

            <style>{`
        .hero {
          position: relative;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
        .hero-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
        }
        .hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 40px;
          height: 100%;
        }
        .text-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 100%;
        }
        .hero-title {
          font-family: 'Saira Extra Condensed', sans-serif;
          font-size: 10rem;
          font-weight: 900;
          font-style: italic;
          line-height: 1;
          margin: 0;
          letter-spacing: 8px;
          color: white;
          text-transform: uppercase;
          white-space: nowrap;
          text-shadow: 0 10px 30px rgba(0,0,0,0.8);
        }
        .title-underline {
          width: 100%;
          max-width: 800px;
          height: 4px;
          background-color: white;
          margin: 20px 0;
          box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
        @media (max-width: 1400px) {
          .hero-title {
            font-size: 8rem;
          }
        }
        @media (max-width: 1024px) {
          .hero-title {
            font-size: 6rem;
            letter-spacing: 4px;
          }
        }
        @media (max-width: 768px) {
          .hero-title {
            font-size: 4rem;
            letter-spacing: 2px;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
