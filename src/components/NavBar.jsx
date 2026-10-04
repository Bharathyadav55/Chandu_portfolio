import React, { useState, useEffect } from 'react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mobile drawer immediately if user scrolls
      if (isOpen) setIsOpen(false);

      // Keep navbar visible at the very top of the page
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY) {
        // Scrolling down: hide navbar
        setIsVisible(false);
      } else {
        // Scrolling up: reveal navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-md border-b border-neutral-900 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Monogram / Logo */}
        <a
          href="#home"
          className="font-serif text-2xl font-bold tracking-widest text-white uppercase hover:text-neutral-300 transition-colors"
        >
          CHANDU ALLAMALLA
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-medium tracking-[0.25em] uppercase text-neutral-300">
          <a href="#home" className="hover:text-white transition-colors duration-200">Home</a>
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#work" className="hover:text-white transition-colors duration-200">Work</a>
          <a href="#images" className="hover:text-white transition-colors duration-200">Images</a>
          <a href="#resume" className="hover:text-white transition-colors duration-200">Resume</a>
          <a
            href="#contact"
            className="border border-white/80 px-5 py-2 text-white hover:bg-white hover:text-black transition-all duration-300 tracking-[0.2em]"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-neutral-400 focus:outline-none p-2"
            aria-label="Toggle Navigation"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-black border-b border-neutral-900 px-6 py-6 space-y-4 text-xs font-medium tracking-[0.25em] uppercase text-neutral-300 shadow-2xl">
          <a href="#home" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">About</a>
          <a href="#work" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">Work</a>
          <a href="#images" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">Images</a>
          <a href="#resume" onClick={() => setIsOpen(false)} className="block py-1 hover:text-white">Resume</a>
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block border border-white/80 px-5 py-2 text-white hover:bg-white hover:text-black mt-2 tracking-[0.2em]"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}