import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Packages } from './pages/Packages';
import { Investor } from './pages/Investor';
import { Apps } from './pages/Apps';
import { Booking } from './pages/Booking';
import { PlanetProfile } from './pages/PlanetProfile';
import { Footer } from './components/Footer';
import { useEffect } from 'react';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="antialiased selection:bg-cyan-500 selection:text-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/planet" element={<PlanetProfile />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/investor" element={<Investor />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;