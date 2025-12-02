import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import colibriPink from '../assets/colibri-pink.png';
import colibriBlack from '../assets/colibri-black.png';
import colibriPark from '../assets/colibri-built-park.jpg';
import colibriStreet from '../assets/colibri-built-street.png';
import colibriGym from '../assets/colibri-built-gym.png';
import '../styles/ColibriPage.css';

const ColibriPage = () => {
    const [activeColor, setActiveColor] = useState('black');
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme(activeColor === 'pink' ? 'white' : 'black');
        return () => setTheme('default');
    }, [activeColor, setTheme]);

    const toggleColor = (color) => {
        setActiveColor(color);
    };

    const builtForItems = [
        {
            id: 1,
            title: 'Short Distance',
            subtitle: '3-5km Jogging',
            image: colibriPark,
            desc: 'Perfect for your daily run.',
            style: { objectPosition: 'right center' } // Focus on right side
        },
        {
            id: 2,
            title: 'Daily Commute',
            subtitle: 'Leisure Walking',
            image: colibriStreet,
            desc: 'Comfort that cares for your knees.'
        },
        {
            id: 3,
            title: 'Gym & Indoor',
            subtitle: 'Fitness Training',
            image: colibriGym,
            desc: 'Versatile support for all your workouts.'
        }
    ];

    return (
        <div className={`product-page ${activeColor}-mode`}>
            {/* Interactive Hero Section */}
            <section className="product-hero">
                <div className="hero-background"></div>

                <div className="product-hero-content">
                    <h1 className="product-title">
                        {activeColor === 'pink' ? 'AIRY PINK' : 'SHADOW BLACK'}
                    </h1>
                    <h2 className="product-subtitle">
                        WIDE IS FAR
                    </h2>
                    <p className="product-desc">
                        The Colibri Air 3.0 redefines lightweight training. With a focus on joint-friendly cushioning
                        and a wide forefoot design, it's the perfect choice for short runs, gym sessions, and daily life.
                    </p>

                    <div className="hero-controls">
                        <button
                            className={`color-toggle-btn pink ${activeColor === 'pink' ? 'active' : ''}`}
                            onClick={() => toggleColor('pink')}
                        >
                            Pink
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
                        src={colibriPink}
                        alt="Colibri Airy Pink"
                        className={`product-hero-image pink-shoe ${activeColor === 'pink' ? 'visible' : 'hidden'}`}
                    />
                    <img
                        src={colibriBlack}
                        alt="Colibri Shadow Black"
                        className={`product-hero-image black-shoe ${activeColor === 'black' ? 'visible' : 'hidden'}`}
                    />
                </div>
            </section>

            {/* Overview Section */}
            <section className="product-overview">
                <div className="overview-container">
                    <div className="overview-text">
                        <h2 className="section-title" style={{ color: activeColor === 'pink' ? '#111' : 'white', marginBottom: '20px' }}>Feather-Light Comfort</h2>
                        <p>
                            Weighing only 210g, the Colibri Air 3.0 features a supercritical midsole that absorbs impact
                            effectively, providing a cloud-like experience for every step.
                        </p>
                    </div>
                    <div className="overview-specs">
                        <div className="spec-box">
                            <span className="spec-label">Weight</span>
                            <span className="spec-value">210g</span>
                        </div>
                        <div className="spec-box">
                            <span className="spec-label">Drop</span>
                            <span className="spec-value">6mm</span>
                        </div>
                        <div className="spec-box">
                            <span className="spec-label">Fit</span>
                            <span className="spec-value">Wide</span>
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
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="built-for-image"
                                    style={item.style || {}}
                                />
                            </div>
                            <div className="built-for-content">
                                <h3 className="built-for-subtitle">{item.subtitle}</h3>
                                <h2 className="built-for-title">{item.title}</h2>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Technology Deep Dive */}
            <section className="tech-deep-dive">
                <h2 className="section-title">Core Technology</h2>

                <div className="tech-columns three-cols">
                    {/* Column 1: GiGa Tech */}
                    <div className="tech-column">
                        <h3 className="column-header">GiGa Tech</h3>
                        <div className="tech-card">
                            <h3>GiGaBoom® Midsole</h3>
                            <p>
                                Advanced supercritical foaming technology provides 30% more rebound than traditional EVA,
                                delivering exceptional energy return and cushioning.
                            </p>
                        </div>
                        <div className="tech-card">
                            <h3>GiGaGrip® CPU</h3>
                            <p>
                                Cast Polyurethane outsole offers 5x the abrasion resistance of traditional rubber,
                                ensuring long-lasting durability and grip.
                            </p>
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="tech-separator"></div>

                    {/* Column 2: Build & Fit */}
                    <div className="tech-column">
                        <h3 className="column-header">Build & Fit</h3>
                        <div className="tech-card">
                            <h3>Air Mesh Upper</h3>
                            <p>
                                Lightweight breathable mesh with TPU hot-cut details ensures maximum airflow
                                and a secure, comfortable fit.
                            </p>
                        </div>
                        <div className="tech-card">
                            <h3>Wide Forefoot</h3>
                            <p>
                                Designed with a wide forefoot to prevent squeezing, offering a comfortable fit
                                that respects the natural shape of your foot.
                            </p>
                        </div>
                    </div>

                    {/* Separator */}
                    <div className="tech-separator"></div>

                    {/* Column 3: Comfort Specs */}
                    <div className="tech-column">
                        <h3 className="column-header">Comfort Specs</h3>
                        <div className="tech-card">
                            <h3>6mm Drop</h3>
                            <p>
                                A balanced 6mm heel-to-toe drop promotes a natural running gait and reduces
                                stress on the metatarsals.
                            </p>
                        </div>
                        <div className="tech-card">
                            <h3>Sanitized® Insole</h3>
                            <p>
                                Treated to inhibit odor-causing bacteria, combined with a COOLMAX® lining
                                to keep your feet dry and fresh.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ColibriPage;
