import React from 'react';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import TechnologyShowcase from '../components/TechnologyShowcase';
import AboutAvocco from '../components/AboutAvocco';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedProducts />
            <TechnologyShowcase />
            <AboutAvocco />
        </>
    );
};

export default Home;
