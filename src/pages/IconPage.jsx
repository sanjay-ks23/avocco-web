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

import iconOrangeNew1 from '../assets/icon-orange-new-1.png';
import iconOrangeNew3 from '../assets/icon-orange-new-3.png';

import builtMarathon from '../assets/icon-built-marathon.jpg';
import builtTraining from '../assets/icon-built-training.png';
import builtTrail from '../assets/icon-built-trail.jpg';

const IconPage = () => {
    const [activeColor, setActiveColor] = useState('lightblue'); // Start with lightblue
    const [activeAngle, setActiveAngle] = useState(0); // Index 0-2
    const { setTheme } = useTheme();

    // Image Mapping
    // Light Blue: Top -> Side -> Sole
    // Black: Top -> Back -> Sole
    // Orange: New1 -> Sole -> New3 (User Request: Smooth Animation)
    // Blue: Top -> Back -> Sole
    const images = {
        lightblue: [iconLightBlueTop, iconLightBlueSide, iconLightBlueSole],
        black: [iconBlackTop, iconBlackBack, iconBlackSole],
        orange: [iconOrangeNew1, iconOrangeSole, iconOrangeNew3],
        blue: [iconBlueTop, iconBlueBack, iconBlueSole]
    };

    useEffect(() => {
        setTheme(activeColor);
        return () => setTheme('default');
    }, [activeColor, setTheme]);

    const toggleColor = (color) => {
        setActiveColor(color);
        // Reset to the first angle (index 0)
        setActiveAngle(0);
    };

    const toggleAngle = (index) => {
        setActiveAngle(index);
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

    const currentImages = images[activeColor];

    const builtForItems = [
        {
            id: 1,
            title: 'Marathon Racing',
            subtitle: 'Stability & Protection',
            image: builtMarathon,
            desc: 'For mass participation marathon runners needing stability and protection.'
        },
        {
            id: 2,
            title: 'Long Distance Training',
            subtitle: 'Long Distance',
            image: builtTraining,
            desc: 'Long Distance runs where consistent comfort is key.'
        },
        {
            id: 3,
            title: 'Light Trail',
            subtitle: 'Versatile Grip',
            image: builtTrail,
            desc: 'Versatile enough for long distance training on weekend hikes and light off-road trails.'
        }
    ];


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
                        {['lightblue', 'black', 'orange', 'blue'].map(color => (
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
                        {['lightblue', 'black', 'orange', 'blue'].map(color => {
                            const colorImages = images[color];
                            const imageSrc = colorImages[activeAngle];

                            if (!imageSrc) return null;

                            return (
                                <img
                                    key={color}
                                    src={imageSrc}
                                    alt={`Icon Vento ${color} ${activeAngle}`}
                                    className={`icon-main-image ${activeColor === color ? 'visible' : 'hidden'}`}
                                />
                            );
                        })}
                    </div>

                    {/* Thumbnails */}
                    <div className="icon-thumbnails">
                        {currentImages.map((img, index) => (
                            <div
                                key={index}
                                className={`icon-thumbnail ${activeAngle === index ? 'active' : ''}`}
                                onClick={() => toggleAngle(index)}
                            >
                                <img src={img} alt={`View ${index + 1}`} />
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

export default IconPage;
