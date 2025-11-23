import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md py-3 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-cyan-500 p-2 rounded-full bg-opacity-20 group-hover:bg-opacity-40 transition-all">
               <Rocket className="w-6 h-6 text-cyan-400" />
            </div>
            <span className="text-2xl font-display font-bold tracking-widest text-white">
              CELESTIA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-wider hover:text-cyan-400 transition-colors ${
                  location.pathname === item.path ? 'text-cyan-400' : 'text-slate-300'
                }`}
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
            <Link
              to="/booking"
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-6 py-2 rounded-full font-bold text-sm transition-all transform hover:scale-105"
            >
              BOOK VOYAGE
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white">
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-white/10 p-4 flex flex-col space-y-4 shadow-2xl">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-slate-300 hover:text-cyan-400 font-medium block"
            >
              {item.label}
            </Link>
          ))}
           <Link
              to="/booking"
              onClick={() => setIsOpen(false)}
              className="bg-cyan-500 text-center text-slate-950 px-6 py-3 rounded-md font-bold"
            >
              BOOK VOYAGE
            </Link>
        </div>
      )}
    </nav>
  );
};