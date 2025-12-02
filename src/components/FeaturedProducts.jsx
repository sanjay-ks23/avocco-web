import React from 'react';
import zFly from '../assets/ZFly.png';
import lifestyleTraining from '../assets/lifestyle-training.png';
import lifestyleTrail from '../assets/lifestyle-trail.png';
import heroShoe from '../assets/hero-shoe-clean.png';

import '../styles/FeaturedProducts.css';

const FeaturedProducts = () => {
  const categories = [
    {
      id: 1,
      title: 'COLIBRI SERIES',
      subtitle: 'For the Ultimate Energised Ride',
      image: zFly,
      link: '#colibri'
    },
    {
      id: 2,
      title: 'ICON SERIES',
      subtitle: 'Power Up Your Workouts',
      image: lifestyleTraining,
      link: '#icon'
    },
    {
      id: 3,
      title: 'FANTASY SERIES',
      subtitle: 'Conquer Any Terrain',
      image: lifestyleTrail,
      link: '#fantasy'
    },
    {
      id: 4,
      title: 'GRAGLE SERIES',
      subtitle: 'Everyday Comfort & Style',
      image: heroShoe,
      link: '#gragle'
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
