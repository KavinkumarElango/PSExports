import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_CONFIG } from '../../config/company';
import { Button } from '../ui/Button';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track location changes to close menu
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsMobileMenuOpen(false);
  }

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Products', path: '/products' },
    { label: 'Manufacturing', path: '/manufacturing' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-ivory/98 backdrop-blur-md shadow-xs border-b border-linen py-3'
            : 'bg-ivory border-b border-linen py-4.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Typographic Brand Wordmark */}
            <Link to="/" className="group flex flex-col focus:outline-none">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-forest group-hover:text-terracotta transition-colors">
                {COMPANY_CONFIG.name.toUpperCase()}
              </span>
              <span className="text-[10px] font-sans uppercase tracking-[0.16em] text-charcoal font-medium">
                {COMPANY_CONFIG.descriptor}
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-7 lg:space-x-9" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs font-sans uppercase tracking-wider font-semibold transition-colors relative py-1 focus:outline-none ${
                      isActive
                        ? 'text-forest font-bold'
                        : 'text-charcoal hover:text-forest'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action & Mobile Toggle */}
            <div className="flex items-center space-x-3">
              <div className="hidden sm:block">
                <Button
                  to="/contact"
                  variant="primary"
                  size="sm"
                  icon={<ArrowUpRight className="w-3.5 h-3.5 ml-1" />}
                >
                  Request a Quote
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 text-forest hover:bg-linen/40 focus:outline-none focus:ring-1 focus:ring-forest"
                aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-charcoal/50 backdrop-blur-xs md:hidden animate-fadeIn"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-ivory border-l border-linen p-6 flex flex-col justify-between shadow-xl pt-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="pb-4 border-b border-linen mb-6">
                <span className="text-[11px] uppercase font-sans tracking-wider text-terracotta font-semibold block">
                  PALLIPALAYAM · TAMIL NADU · INDIA
                </span>
                <span className="font-serif text-xl font-bold text-forest">
                  {COMPANY_CONFIG.name}
                </span>
              </div>

              <nav className="flex flex-col space-y-4" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`text-sm font-sans uppercase tracking-wider py-2.5 px-3 transition-colors ${
                        isActive
                          ? 'bg-linen/60 text-forest font-bold border-l-3 border-terracotta'
                          : 'text-charcoal font-medium hover:bg-linen/30'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-linen">
              <Button
                to="/contact"
                variant="primary"
                size="md"
                fullWidth
                icon={<ArrowUpRight className="w-4 h-4 ml-1" />}
              >
                Request a Quote
              </Button>
              <p className="mt-4 text-xs text-charcoal font-medium leading-relaxed text-center">
                Air-Jet & Water-Jet Woven Textiles · Continuous Export Rolls
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Spacer to offset fixed header */}
      <div className="h-20 sm:h-22" />
    </>
  );
};
