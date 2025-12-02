import React from 'react';
import '../styles/TechnologyShowcase.css';

import toeBoxIcon from '../assets/tech-toe-box.png';
import midfootIcon from '../assets/tech-midfoot.png';
import lowDropIcon from '../assets/tech-low-drop.png';

import midsoleIcon from '../assets/tech-midsole.png';

const TechnologyShowcase = () => {
    return (
        <section className="tech-section">
            <div className="tech-header">
                <h2 className="section-title">Technology</h2>
            </div>

            {/* Key Features (Circles) */}
            <div className="features-grid">
                {/* Feature 1: Roomy Toe Box */}
                <div className="feature-item">
                    <div className="icon-circle">
                        <img src={toeBoxIcon} alt="Roomy Toe Box" className="feature-icon-img" />
                    </div>
                    <div className="feature-label">ROOMY<br />TOE BOX</div>
                </div>

                {/* Feature 2: Secure Midfoot */}
                <div className="feature-item">
                    <div className="icon-circle">
                        <img src={midfootIcon} alt="Secure Midfoot" className="feature-icon-img" />
                    </div>
                    <div className="feature-label">SECURE<br />MIDFOOT & HEEL</div>
                </div>

                {/* Feature 3: Low Drop */}
                <div className="feature-item">
                    <div className="icon-circle">
                        <img src={lowDropIcon} alt="Low Drop" className="feature-icon-img" />
                    </div>
                    <div className="feature-label">LOW HEEL<br />TO TOE DROP</div>
                </div>

                {/* Feature 4: Thick Midsole */}
                <div className="feature-item">
                    <div className="icon-circle">
                        <img src={midsoleIcon} alt="Thick Midsole" className="feature-icon-img" />
                    </div>
                    <div className="feature-label">THICK & LIGHT<br />MIDSOLE</div>
                </div>
            </div>

            <div className="core-tech-container">
                <h3 className="core-tech-title">Core Technology</h3>

                <div className="tech-logos-grid">
                    <div className="tech-brand">
                        <span className="brand-name brand-vibram">Vibram</span>
                        <span className="brand-desc">Vibram brand outsoles.</span>
                    </div>

                    <div className="tech-brand">
                        <span className="brand-name">Natural Comfort</span>
                        <span className="brand-desc">Shoes designed following the natural shape of the human foot.</span>
                    </div>

                    <div className="tech-brand">
                        <span className="brand-name brand-coolmax">COOLMAX</span>
                        <span className="brand-desc">Utilizing Coolmax material known for its quick-drying properties.</span>
                    </div>

                    <div className="tech-brand">
                        <span className="brand-name brand-gigaboom">GigaBoom</span>
                        <span className="brand-desc">Incorporating Gigaboom brand midsoles, renowned for their exceptional shock absorption.</span>
                    </div>

                    <div className="tech-brand">
                        <span className="brand-name">Kambaso</span>
                        <span className="brand-desc">Featuring Kambaso brand insoles, renowned for their odor-control and moisture-wicking properties.</span>
                    </div>

                    <div className="tech-brand">
                        <span className="brand-name brand-sanitized">Sanitized</span>
                        <span className="brand-desc">Sanitized, the Swiss antimicrobial additive brand, helps in preventing foot odor.</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologyShowcase;
