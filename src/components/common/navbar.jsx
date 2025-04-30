"use client"

import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  
  const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'About', path: '/about', icon: null },
    { name: 'Services', path: '#', icon: null, isDropdown: true },
    { name: 'Contact', path: '/contact', icon: null }
  ];

  const serviceItems = [
    { name: 'Law', path: '/law', icon: null },
    { name: 'ADS', path: '/ads', icon: null },
    { name: 'Tech', path: '/tech', icon: null }
  ];

  // Function to render appropriate icon based on name
  const renderIcon = (iconName) => {
    if (iconName === 'home') {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 mx-auto max-w-md w-11/12">
      <div 
        className={`${isServicesOpen ? 'block' : 'hidden'} bg-red-500 rounded-t-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col">
          {serviceItems.map((service, serviceIndex) => (
            <Link
              key={serviceIndex}
              href={service.path}
              className="px-8 py-4 text-white hover:bg-red-600 transition-colors duration-200 text-base"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
      
      <nav className={`bg-red-500 shadow-lg rounded-3xl overflow-hidden transition-all duration-300 ease-in-out ${isServicesOpen ? 'rounded-b-3xl rounded-t-none' : ''}`}>
        <div className="flex justify-around items-center h-16 relative">
          <Link href="/" className="flex items-center justify-center text-white">
            <div className="bg-red-400 rounded-full p-4">
              {renderIcon('home')}
            </div>
          </Link>
          
          <Link href="/about" className="px-6 py-3 text-white font-medium hover:bg-red-600 rounded-full transition-colors duration-200 text-lg">
            <span>About</span>
          </Link>
          
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <div className="px-6 py-3 text-white font-medium hover:bg-red-600 rounded-full transition-colors duration-200 cursor-pointer flex items-center text-lg">
              <span>Services</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 ml-1 transform transition-transform duration-300 ${isServicesOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
          
          <Link href="/contact" className="px-6 py-3 text-white font-medium hover:bg-red-600 rounded-full transition-colors duration-200 text-lg">
            <span>Contact</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;