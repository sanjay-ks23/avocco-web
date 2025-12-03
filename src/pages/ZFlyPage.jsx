import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import zFlyWhite from '../assets/zfly-white.png';
import zFlyBlack from '../assets/zfly-black.png';
import zFlySportsExam from '../assets/zfly-sports-exam.jpg';
import zFlyLongDistance from '../assets/zfly-long-distance.jpg';
import zFlyEliteRacing from '../assets/zfly-elite-racing.jpg';
import '../styles/ZFlyPage.css';

const ZFlyPage = () => {
    const [activeColor, setActiveColor] = useState('white');
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme(activeColor === 'white' ? 'white' : 'black');
        return () => setTheme('default');
    }, [activeColor, setTheme]);

    const toggleColor = (color) => {
        setActiveColor(color);
    };

    const builtForItems = [
        {
            id: 1,
            title: 'Sports Exams',
            subtitle: 'Running & Long Jump',
            image: zFlySportsExam,
            desc: 'Engineered for explosive power and stability during critical exams.'
        },
        {
            id: 2,
            title: 'Long Distance',
            subtitle: 'LSD Training',
            image: zFlyLongDistance,
            desc: 'Superior cushioning and energy return for endurance training.'
        },
        {
            id: 3,
            title: 'Elite Racing',
            subtitle: 'Advanced Runners',
            image: zFlyEliteRacing,
            desc: 'Lightweight propulsion for those chasing their personal best.'
        }
    ];

    return (
        <div className={`product-page ${activeColor}-mode`}>
            {/* Interactive Hero Section */}
            <section className="product-hero">
                <div className="hero-background"></div>

                <div className="product-hero-content">
                    <h1 className="product-title">
                        {activeColor === 'white' ? 'MOON WHITE' : 'FLASH BLACK'}
                    </h1>
                    <h2 className="product-subtitle">
                        {activeColor === 'white' ? 'Pure. Light. Fast.' : 'Stealth. Power. Speed.'}
                    </h2>
                    <p className="product-desc">
                        The ZFLY Series adapts to your style. Choose the purity of Moon White for the track,
                        or the intensity of Flash Black for the streets. Same world-leading performance,
                        two distinct attitudes.
                    </p>

                    <div className="hero-controls">
                        <button
                            className={`color-toggle-btn white ${activeColor === 'white' ? 'active' : ''}`}
                            onClick={() => toggleColor('white')}
                        >
                            White
                        </button>
                        <button
                            className={`color-toggle-btn black ${activeColor === 'black' ? 'active' : ''}`}
                            onClick={() => toggleColor('black')}
                        >
                            Black
                        </button>
                    </div>
                </div>

                <div className="product-hero-image-wrapper">
                    <img
                        src={zFlyWhite}
                        alt="ZFly Moon White"
                        className={`product-hero-image white-shoe ${activeColor === 'white' ? 'visible' : 'hidden'}`}
                    />
                    <img
                        src={zFlyBlack}
                        alt="ZFly Flash Black"
                        className={`product-hero-image black-shoe ${activeColor === 'black' ? 'visible' : 'hidden'}`}
                    />
                </div>
            </section>

            {/* Overview Section */}
            <section className="product-overview">
                <div className="overview-container">
                    <div className="overview-text">
                        <h2 className="section-title" style={{ color: activeColor === 'white' ? '#111' : 'white', marginBottom: '20px' }}>Performance Packed</h2>
                        <p>
                            The ZFLY configuration features an aliphatic "popcorn" supercritical midsole,
                            a wide anti-torsion carbon fiber plate, and lightweight, breathable jacquard mesh.
                        </p>
                    </div>
                    <div className="overview-specs">
                        <div className="spec-box">
                            <span className="spec-label">Weight</span>
                            <span className="spec-value">Ultra-Light</span>
                        </div>
                        <div className="spec-box">
                            <span className="spec-label">Drop</span>
                            <span className="spec-value">12mm</span>
                        </div>
                        <div className="spec-box">
                            <span className="spec-label">Surface</span>
                            <span className="spec-value">Road / Track</span>
                        </div>
                    </div>
                </div>
            </section>



            {/* Technology Deep Dive */}
            <section className="tech-deep-dive">
                <h2 className="section-title">Core Technology</h2>

                <div className="tech-columns">
                    {/* Column 1: GiGa Technologies */}
                    <div className="tech-column giga-column">
                        <h3 className="column-header">GiGa Tech</h3>

                        {/* 1. GiGaBoom Midsole */}
                        <div className="tech-card">
                            <div className="tech-icon-wrapper">
                                {/* Placeholder for tech icon */}
                            </div>
                            <h3>GiGaBoom® Midsole</h3>
                            <p>
                                Aliphatic "popcorn" supercritical midsole offers a durable, resilient rebound that lasts
                                long distances without bottoming out.
                            </p>
                        </div>

                        {/* 2. GiGaTex Upper */}
                        <div className="tech-card">
                            <div className="tech-icon-wrapper">
                            </div>
                            <h3>GiGaTex® Upper</h3>
                            <p>
                                Jacquard engineering mesh with anti-siphon technology. Features a nano-polymer water-repellent
                                coating to reliably shed water while maintaining breathability.
                            </p>
                        </div>

                        {/* 3. GiGaGrip Outsole */}
                        <div className="tech-card">
                            <div className="tech-icon-wrapper">
                            </div>
                            <h3>GiGaGrip® Outsole</h3>
                            <p>
                                Features hollow granules for a lightweight, wear-resistant, and anti-slip grip
                                that commands both the track and the street.
                            </p>
                        </div>
                    </div>

                    {/* Vertical Separator */}
                    <div className="tech-separator"></div>

                    {/* Column 2: Performance Features */}
                    <div className="tech-column perf-column">
                        <h3 className="column-header">Performance Specs</h3>

                        {/* 1. PU Foam Insole */}
                        <div className="tech-card">
                            <div className="tech-icon-wrapper">
                            </div>
                            <h3>PU Foam Insole</h3>
                            <p>
                                The PU foam insole provides long-lasting comfort and energy return, with moisture-wicking
                                properties to keep feet dry and odor-free.
                            </p>
                        </div>

                        {/* 2. 12mm Drop */}
                        <div className="tech-card">
                            <div className="tech-icon-wrapper">
                            </div>
                            <h3>12mm Drop</h3>
                            <p>
                                Optimized 12mm heel-to-toe drop designed for smooth forward rolling motion and
                                enhanced propulsion efficiency.
                            </p>
                        </div>

                        {/* 3. Carbon Fiber Plate */}
                        <div className="tech-card">
                            <div className="tech-icon-wrapper">
                            </div>
                            <h3>Full Carbon Insert</h3>
                            <p>
                                A wide anti-torsion carbon fiber plate embedded in the midsole provides exceptional
                                stability and powerful propulsion.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Built For Section */}
            <section className="built-for-section">
                <div className="section-header">
                    <h2 className="section-title">Built For</h2>
                </div>
                <div className="built-for-grid">
                    {builtForItems.map(item => (
                        <div key={item.id} className="built-for-item">
                            <div className="image-wrapper">
                                <img src={item.image} alt={item.title} className="built-for-image" />
                            </div>
                            <div className="built-for-content">
                                <h3 className="built-for-subtitle">{item.subtitle}</h3>
                                <h2 className="built-for-title">{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};
export default ZFlyPage;
