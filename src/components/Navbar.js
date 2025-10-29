// src/components/Navbar.js

import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-10 bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo MyProfile */}
        <div className="text-2xl font-bold text-gray-800">MyProfile</div>

        {/* Menu Navigasi (Desktop) */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-gray-600 hover:text-indigo-600 transition">About</a>
          <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition">Skills</a>
          <a href="#portfolio" className="text-gray-600 hover:text-indigo-600 transition">Portfolio</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition">Contact</a>
          
          {/* Tombol CTA */}
          <a href="#contact">
            <button className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-5 py-2 rounded-lg font-medium shadow-lg hover:opacity-90 transition">
              Say Hi!
            </button>
          </a>
        </div>
        
        {/* Hamburger Icon (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-gray-600 focus:outline-none"
        >
          {/* SVG Hamburger atau Close */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

      </div>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-2 bg-gray-50 border-t">
          <a href="#about" className="block py-2 text-gray-600 hover:text-indigo-600 transition">About</a>
          <a href="#skills" className="block py-2 text-gray-600 hover:text-indigo-600 transition">Skills</a>
          <a href="#portfolio" className="block py-2 text-gray-600 hover:text-indigo-600 transition">Portfolio</a>
          <a href="#contact" className="block py-2 text-gray-600 hover:text-indigo-600 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;