import React from 'react';
import zFly from '../assets/ZFly.png';
import iconShoe from '../assets/Icon.png';
import colibriShoe from '../assets/Collibri.png';
import '../styles/FeaturedProducts.css';

const FeaturedProducts = () => {
  const categories = [
    {
      id: 1,
      title: 'ZFLY SERIES',
      subtitle: 'Dominating the Race Course',
      image: zFly,
      link: '#zfly'
    },
    {
      id: 2,
      title: 'ICON SERIES',
      subtitle: 'Wide is Far',
      image: iconShoe,
      link: '#icon'
    },
    {
      id: 3,
      title: 'COLIBRI SERIES',
      subtitle: 'Redefining Lightweight Training',
      image: colibriShoe,
      link: '#colibri'
    }
  ];

  return (
    <section className="featured-section">
      <div className="section-header">
        <h2 className="section-title">Featured</h2>
      </div>
      <div className="grid-container">
        {categories.map((category) => (
          <div key={category.id} className="grid-item">
            <div className="image-wrapper">
              <img src={category.image} alt={category.title} className="category-image" />
            </div>
            <div className="category-content">
              <h3 className="category-subtitle">{category.subtitle}</h3>
              <h2 className="category-title">{category.title}</h2>
              <button className="shop-button">Shop</button>
            </div>
          </div>
        ))}
      </div>


    </section>
  );
};

export default FeaturedProducts;
