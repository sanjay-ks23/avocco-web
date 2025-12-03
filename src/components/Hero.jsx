import React from 'react';
import heroBg from '../assets/hero-bg.png';
import '../styles/Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = 3;
  const slideDuration = 8000; // 8 seconds per slide

  // Placeholder slides - using same video for now
  const slides = [
    { id: 1, src: heroBg, alt: "Hero Background 1" },
    { id: 2, src: heroBg, alt: "Hero Background 2" },
    { id: 3, src: heroBg, alt: "Hero Background 3" }
  ];

  // Auto-play logic
  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, slideDuration);
    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="hero">
      <link href="https://fonts.googleapis.com/css2?family=Saira+Extra+Condensed:wght@500;900&display=swap" rel="stylesheet" />

      {/* Carousel Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`video-background ${index === currentSlide ? 'active' : ''}`}
        >
          <img src={slide.src} alt={slide.alt} className="hero-video" />
          <div className="overlay"></div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <div className="nav-container">
        <button className="nav-arrow prev" onClick={prevSlide} aria-label="Previous Slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button className="nav-arrow next" onClick={nextSlide} aria-label="Next Slide">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>

      {/* Content Layer */}
      <div className="hero-content">
        <div className="text-container">
          <h1 className="hero-title">WIDE IS FAR</h1>
          <div className="title-underline"></div>
        </div>
      </div>

      {/* Timer / Progress Indicator */}
      <div className="hero-timer">
        <div className="timer-track">
          <div
            className="timer-bar"
            key={currentSlide} /* Key forces reset on slide change */
            style={{ animationDuration: `${slideDuration}ms` }}
          ></div>
        </div>
        <span className="slide-counter">{currentSlide + 1} / {totalSlides}</span>
      </div>
    </section>
  );
};

export default Hero;
