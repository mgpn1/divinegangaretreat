
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white py-2 shadow-md'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center">
          <span className={`text-xl md:text-2xl font-serif font-bold ${
            isScrolled ? 'text-hotel-green' : 'text-white'
          }`}>
            Divine Ganga Retreat
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className={`font-medium text-sm ${
            isScrolled ? 'text-gray-700 hover:text-hotel-green' : 'text-white hover:text-hotel-beige'
          }`}>
            About
          </a>
          <a href="#rooms" className={`font-medium text-sm ${
            isScrolled ? 'text-gray-700 hover:text-hotel-green' : 'text-white hover:text-hotel-beige'
          }`}>
            Rooms
          </a>
          <a href="#amenities" className={`font-medium text-sm ${
            isScrolled ? 'text-gray-700 hover:text-hotel-green' : 'text-white hover:text-hotel-beige'
          }`}>
            Amenities
          </a>
          <a href="#gallery" className={`font-medium text-sm ${
            isScrolled ? 'text-gray-700 hover:text-hotel-green' : 'text-white hover:text-hotel-beige'
          }`}>
            Gallery
          </a>
          <a href="#contact" className={`font-medium text-sm ${
            isScrolled ? 'text-gray-700 hover:text-hotel-green' : 'text-white hover:text-hotel-beige'
          }`}>
            Contact
          </a>
          <Button 
            className={`ml-4 ${
              isScrolled 
                ? 'bg-hotel-green text-white hover:bg-opacity-90' 
                : 'bg-white text-hotel-green hover:bg-hotel-beige'
            }`}
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg 
            className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-4 absolute w-full">
          <div className="flex flex-col space-y-4">
            <a href="#about" className="text-gray-700 hover:text-hotel-green font-medium" onClick={() => setMobileMenuOpen(false)}>
              About
            </a>
            <a href="#rooms" className="text-gray-700 hover:text-hotel-green font-medium" onClick={() => setMobileMenuOpen(false)}>
              Rooms
            </a>
            <a href="#amenities" className="text-gray-700 hover:text-hotel-green font-medium" onClick={() => setMobileMenuOpen(false)}>
              Amenities
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-hotel-green font-medium" onClick={() => setMobileMenuOpen(false)}>
              Gallery
            </a>
            <a href="#contact" className="text-gray-700 hover:text-hotel-green font-medium" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </a>
            <Button className="bg-hotel-green text-white hover:bg-opacity-90 mt-2">
              Book Now
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
