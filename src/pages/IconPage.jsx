import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/IconPage.css';

// Import all 16 images
import iconBlackTop from '../assets/icon-black-top.png';
import iconBlackSole from '../assets/icon-black-sole.png';
import iconBlackSide from '../assets/icon-black-side.png';
import iconBlackBack from '../assets/icon-black-back.png';

import iconLightBlueTop from '../assets/icon-lightblue-top.png';
import iconLightBlueSole from '../assets/icon-lightblue-sole.png';
import iconLightBlueSide from '../assets/icon-lightblue-side.png';
import iconLightBlueBack from '../assets/icon-lightblue-back.png';

import iconBlueTop from '../assets/icon-blue-top.png';
import iconBlueSole from '../assets/icon-blue-sole.png';
import iconBlueSide from '../assets/icon-blue-side.png';
import iconBlueBack from '../assets/icon-blue-back.png';

import iconOrangeTop from '../assets/icon-orange-top.png';
import iconOrangeSole from '../assets/icon-orange-sole.png';
import iconOrangeSide from '../assets/icon-orange-side.png';
import iconOrangeBack from '../assets/icon-orange-back.png';

const IconPage = () => {
    const [activeColor, setActiveColor] = useState('orange');
    const [activeAngle, setActiveAngle] = useState('side'); // 'side', 'back', 'top', 'sole'
    const { setTheme } = useTheme();

    useEffect(() => {
        setTheme(activeColor);
        return () => setTheme('default');
    }, [activeColor, setTheme]);

    const toggleColor = (color) => {
        setActiveColor(color);
    };

    const toggleAngle = (angle) => {
        setActiveAngle(angle);
    };

    const getColorName = () => {
        switch (activeColor) {
            case 'black': return 'VENTO BLACK';
            case 'lightblue': return 'AIRY CYAN';
            case 'blue': return 'DEEP BLUE';
            case 'orange': return 'BLAZE ORANGE';
            default: return 'VENTO BLACK';
        }
    };

    // Image Mapping
    const images = {
        black: { top: iconBlackTop, sole: iconBlackSole, side: iconBlackSide, back: iconBlackBack },
        lightblue: { top: iconLightBlueTop, sole: iconLightBlueSole, side: iconLightBlueSide, back: iconLightBlueBack },
        blue: { top: iconBlueTop, sole: iconBlueSole, side: iconBlueSide, back: iconBlueBack },
        orange: { top: iconOrangeTop, sole: iconOrangeSole, side: iconOrangeSide, back: iconOrangeBack }
    };

    const currentImages = images[activeColor];

    return (
        <div className={`icon-page ${activeColor}-mode`}>
            {/* Hero Section */}
            <section className="icon-hero">
                <div className="icon-hero-content">
                    <h1 className="icon-title">ICON VENTO 2.0</h1>
                    <h2 className="icon-subtitle">{getColorName()}</h2>
                    <p className="icon-desc">
                        The VENTO 2.0 represents a strategic evolution. With a new supercritical midsole
                        for superior rebound and a dual-layer engineered mesh upper, it retains legendary stability
                        while delivering a softer, more responsive ride.
                    </p>

                    <div className="icon-controls">
                        {['orange', 'black', 'lightblue', 'blue'].map(color => (
                            <button
                                key={color}
                                className={`icon-toggle-btn ${color} ${activeColor === color ? 'active' : ''}`}
                                onClick={() => toggleColor(color)}
                            >
                                {color === 'lightblue' ? 'LIGHT BLUE' : color.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="icon-hero-gallery">
                    {/* Main Image Display - Stacked for Smooth Transition */}
                    <div className="icon-main-image-wrapper">
                        {['orange', 'black', 'lightblue', 'blue'].map(color => (
                            <img
                                key={color}
                                src={images[color][activeAngle]}
                                alt={`Icon Vento ${color} ${activeAngle}`}
                                className={`icon-main-image ${activeColor === color ? 'visible' : 'hidden'}`}
                            />
                        ))}
                    </div>

                    {/* Thumbnails */}
                    <div className="icon-thumbnails">
                        {['side', 'back', 'top', 'sole'].map(angle => (
                            <div
                                key={angle}
                                className={`icon-thumbnail ${activeAngle === angle ? 'active' : ''}`}
                                onClick={() => toggleAngle(angle)}
                            >
                                <img src={currentImages[angle]} alt={angle} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="icon-overview">
                <div className="overview-container">
                    <div className="overview-text">
                        <h3>Strategic Evolution</h3>
                        <p>
                            Designed for the demands of long-distance marathon training and racing.
                            The VENTO 2.0 features a firm outer shell for stability and a soft inner core for cushioning,
                            creating the perfect balance for serious runners.
                        </p>
                    </div>
                    <div className="overview-specs">
                        <div className="spec-box">
                            <div className="spec-label">Drop</div>
                            <div className="spec-value">5mm</div>
                        </div>
                        <div className="spec-box">
                            <div className="spec-label">Weight</div>
                            <div className="spec-value">245g</div>
                        </div>
                        <div className="spec-box">
                            <div className="spec-label">Type</div>
                            <div className="spec-value">Stability</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tech Deep Dive */}
            <section className="icon-tech">
                <h2 className="section-title">Core Technology</h2>
                <div className="tech-grid">
                    {/* Column 1: Midsole/Outsole */}
                    <div className="tech-column">
                        <div className="tech-card">
                            <h3>Supercritical Midsole</h3>
                            <p>
                                Upper 45° PHYLON for stability, Lower 53° Supercritical Foam for rebound.
                                Offers superior energy return compared to traditional EVA.
                            </p>
                        </div>
                        <div className="tech-card">
                            <h3>GigaGrip® Outsole</h3>
                            <p>
                                Wet Traction rubber compound provides reliable grip on slippery surfaces
                                and exceptional durability.
                            </p>
                        </div>
                    </div>

                    {/* Column 2: Upper/Fit */}
                    <div className="tech-column">
                        <div className="tech-card">
                            <h3>Dual-Layer Mesh</h3>
                            <p>
                                Engineered mesh upper for maximum breathability with TPU overlays
                                for lightweight support and structure.
                            </p>
                        </div>
                        <div className="tech-card">
                            <h3>DUCK WEB™ Toe Box</h3>
                            <p>
                                Exclusive wide toe box design, engineered for Asian foot shapes
                                to prevent crowding and black toenails.
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Comfort */}
                    <div className="tech-column">
                        <div className="tech-card">
                            <h3>SANITIZED® Insole</h3>
                            <p>
                                Treated to inhibit odor-causing bacteria, keeping your feet fresh
                                during long runs.
                            </p>
                        </div>
                        <div className="tech-card">
                            <h3>COOLMAX® Lining</h3>
                            <p>
                                Moisture-wicking lining keeps feet dry and comfortable,
                                preventing blisters and hot spots.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Built For Section */}
            <section className="icon-built-for">
                <h2 className="section-title">Built For</h2>
                <div className="built-grid">
                    <div className="built-card">
                        <h3>Marathon Racing</h3>
                        <p>For mass participation marathon runners needing stability and protection.</p>
                    </div>
                    <div className="built-card">
                        <h3>LSD Training</h3>
                        <p>Long Slow Distance runs where consistent comfort is key.</p>
                    </div>
                    <div className="built-card">
                        <h3>Light Trail</h3>
                        <p>Versatile enough for weekend hikes and light off-road trails.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IconPage;
