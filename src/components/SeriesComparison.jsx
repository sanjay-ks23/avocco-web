import React from 'react';
import '../styles/SeriesComparison.css';

import zFlyImg from '../assets/ZFly.png';
import iconImg from '../assets/Icon.png';
import colibriImg from '../assets/Collibri.png';

const SeriesComparison = () => {
    const series = [
        {
            id: 1,
            name: 'ZFLY SERIES',
            tagline: 'Dominating the Race Course',
            image: zFlyImg,
            specs: {
                bestFor: 'Racing & Speed',
                cushion: 'Responsive',
                drop: '4mm'
            },
            link: '#zfly'
        },
        {
            id: 2,
            name: 'ICON SERIES',
            tagline: 'Wide is Far',
            image: iconImg,
            specs: {
                bestFor: 'Daily Training',
                cushion: 'Balanced',
                drop: '0mm'
            },
            link: '#icon'
        },
        {
            id: 3,
            name: 'COLIBRI SERIES',
            tagline: 'Lightweight Training',
            image: colibriImg,
            specs: {
                bestFor: 'Tempo & Gym',
                cushion: 'Plush',
                drop: '4mm'
            },
            link: '#colibri'
        }
    ];

    return (
        <section className="comparison-section">
            <div className="section-header">
                <h2 className="section-title">Compare the Series</h2>
            </div>

            <div className="comparison-grid">
                {series.map((item) => (
                    <div key={item.id} className="comparison-card">
                        <div className="comp-image-box">
                            <img src={item.image} alt={item.name} className="comp-shoe-img" />
                        </div>

                        <div className="comp-content">
                            <h3 className="comp-name">{item.name}</h3>
                            <p className="comp-tagline">{item.tagline}</p>

                            <div className="specs-list">
                                <div className="spec-item">
                                    <span className="spec-label">Best For</span>
                                    <span className="spec-value">{item.specs.bestFor}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Cushioning</span>
                                    <span className="spec-value">{item.specs.cushion}</span>
                                </div>
                                <div className="spec-item">
                                    <span className="spec-label">Drop</span>
                                    <span className="spec-value">{item.specs.drop}</span>
                                </div>
                            </div>

                            <button className="comp-shop-btn">Shop Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SeriesComparison;
