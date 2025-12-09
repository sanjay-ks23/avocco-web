import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/HistoryPage.css';
import aboutImage from '../assets/about-heritage.png';

const HistoryPage = () => {
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme('black'); // Force dark theme for premium feel
        return () => setTheme('default');
    }, [setTheme]);

    return (
        <div className="history-page">
            <section className="history-hero">
                <div className="hero-bg-wrapper">
                    <img src={aboutImage} alt="Avocco Heritage" className="history-hero-image" />
                    <div className="history-overlay"></div>
                </div>
                <div className="history-hero-content">
                    <h1 className="history-title">OUR LEGACY</h1>
                    <div className="history-underline"></div>
                    <p className="history-subtitle">CRAFTED IN MONTEBELLUNA, ITALY</p>
                </div>
            </section>

            <section className="history-content-section">
                <div className="content-container">
                    <div className="text-block">
                        <h2>Roots of Excellence</h2>
                        <p>
                            Born in the heart of Montebelluna, Italy—the world capital of performance footwear—Avocco represents
                            the convergence of artisanal tradition and cutting-edge innovation. For decades, our craftsmen have
                            perfected the art of shoemaking, treating every stitch as a testament to quality.
                        </p>
                    </div>

                    <div className="text-block alt-align">
                        <h2>The Eagle's Spirit</h2>
                        <p>
                            Inspired by the soaring eagle, our logo symbolizes freedom, vision, and the pursuit of new heights.
                            Just as the eagle commands the skies with grace and power, Avocco empowers athletes to conquer
                            their terrain with effortless speed and unwavering stability.
                        </p>
                    </div>

                    <div className="text-block">
                        <h2>Design Philosophy</h2>
                        <p>
                            "Wide is Far." Our philosophy challenges the conventional narrow fit, embracing a biomechanically
                            optimized wide toe box that allows true natural movement. We believe that comfort is the
                            foundation of endurance, enabling you to go further than ever before.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HistoryPage;
