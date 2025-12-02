import React from 'react';
import '../styles/AboutAvocco.css';
import aboutImage from '../assets/about-heritage.png';

const AboutAvocco = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <div className="about-image-col">
                    <img src={aboutImage} alt="Avocco Heritage - Montebelluna" className="about-image" />
                    <div className="about-overlay"></div>
                </div>

                <div className="about-content-col">
                    <div className="about-text-wrapper">
                        <h2 className="about-title">OUR HISTORY</h2>
                        <h3 className="about-subtitle">From Montebelluna to the World</h3>

                        <div className="about-body">
                            <p>
                                Avocco brand was founded in <strong>Montebelluna</strong>, a northern mountain town and the originator of the Italian shoe industry. It is also known as the "City of Rainbow". The brand name comes from <em>Arcobaleno nuvola picco</em>, which means that rainbow clouds wrap around mountains.
                            </p>
                            <p>
                                Its founder <strong>Sr. Roberto Maggini</strong> was deeply attracted by the beautiful scene of rainbow clouds winding mountains in a rainy morning in 1983. Having always cherished the dream of a footwear brand, he skillfully combined the letters <em>Arcobaleno nuvola picco</em> into the Avocco brand, and graphically turned the initial letter 'a' into an <strong>Eagle Head totem</strong> as the brand trademark.
                            </p>
                            <p>
                                Since then, the Avocco brand was born. Because it is deeply loved by consumers, it is now often called "Eagle Head" brand shoes.
                            </p>
                        </div>

                        <button className="about-btn">Discover More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutAvocco;
