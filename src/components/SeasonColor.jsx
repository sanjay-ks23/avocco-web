import React, { useRef } from 'react';
import metallic1 from '../assets/metallic-1.png';
import metallic2 from '../assets/metallic-2.png';
import heroShoe from '../assets/hero-shoe-clean.png';

import '../styles/SeasonColor.css';

const SeasonColor = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = 400;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  const products = [
    { id: 1, name: 'AVOCCO Chrome', image: metallic1, price: '$180' },
    { id: 2, name: 'AVOCCO Iridis', image: metallic2, price: '$200' },
    { id: 3, name: 'AVOCCO Stealth', image: heroShoe, price: '$160' },
    { id: 4, name: 'AVOCCO Silver', image: metallic1, price: '$190' },
    { id: 5, name: 'AVOCCO Shine', image: metallic2, price: '$210' },
  ];

  return (
    <section className="season-color-section">
      <div className="section-header">
        <h2 className="section-title">Colour of the Season: Metallic Shine</h2>
        <div className="nav-buttons">
          <button onClick={() => scroll('left')} className="nav-btn">{'<'}</button>
          <button onClick={() => scroll('right')} className="nav-btn">{'>'}</button>
        </div>
      </div>

      <div className="carousel-container" ref={scrollRef}>
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="image-box">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default SeasonColor;
