import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import TechnologyShowcase from './components/TechnologyShowcase';
import AboutAvocco from './components/AboutAvocco';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <FeaturedProducts />
      <TechnologyShowcase />
      <AboutAvocco />
      <Footer />
    </div>
  );
}

export default App;
