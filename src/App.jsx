import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import TechnologyShowcase from './components/TechnologyShowcase';
import SeasonColor from './components/SeasonColor';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedProducts />
      <TechnologyShowcase />
      <SeasonColor />
      <Footer />
    </div>
  );
}

export default App;
