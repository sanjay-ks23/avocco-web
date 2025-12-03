import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ZFlyPage from './pages/ZFlyPage';
import ColibriPage from './pages/ColibriPage';
import IconPage from './pages/IconPage';
import ScrollToTop from './components/ScrollToTop';
import { ThemeProvider } from './context/ThemeContext';

import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import PageTransition from './components/PageTransition';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/zfly" element={<PageTransition><ZFlyPage /></PageTransition>} />
        <Route path="/colibri" element={<PageTransition><ColibriPage /></PageTransition>} />
        <Route path="/icon" element={<PageTransition><IconPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Header />
          <AnimatedRoutes />
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
