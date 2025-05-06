"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { portfolioImages } from '@/lib/constants';

const PortfolioTabs = () => {
  // Get company names from the portfolioImages object
  const companies = Object.keys(portfolioImages);

  const [activeTab, setActiveTab] = useState(companies[0]);
  const tabsRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Initialize and set up scroll event listeners
  useEffect(() => {
    if (tabsRef.current) {
      checkScrollPosition();
      tabsRef.current.addEventListener('scroll', checkScrollPosition);
    }
    
    return () => {
      if (tabsRef.current) {
        tabsRef.current.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  // Handle tab scrolling
  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === 'left' ? -200 : 200;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  // Open image in modal
  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2> */}
        
        {/* Tabs Navigation with Subtle Arrows */}
        <div className="relative mb-8">
          {/* Left Arrow */}
          <button 
            onClick={() => scrollTabs('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-1.5 shadow-sm transition-opacity duration-300 ${
              showLeftArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll tabs left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Scrollable Tabs */}
          <div 
            ref={tabsRef}
            className="flex overflow-x-auto py-2 px-10 space-x-4 no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {companies.map((company) => (
              <button
                key={company}
                onClick={() => setActiveTab(company)}
                className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors ${
                  activeTab === company
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {company}
              </button>
            ))}
          </div>
          
          {/* Right Arrow */}
          <button 
            onClick={() => scrollTabs('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white bg-opacity-70 rounded-full p-1.5 shadow-sm transition-opacity duration-300 ${
              showRightArrow ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll tabs right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        {/* Image Grid - Max 4 per row, equal size, clickable */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioImages[activeTab].map((image) => (
            <div 
              key={image.id} 
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => openImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image Popup Modal (instead of fullscreen) */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-2 bg-white flex justify-between items-center border-b">
              <h3 className="text-lg font-medium text-gray-900 truncate">
                {selectedImage.alt}
              </h3>
              <button 
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={closeModal}
                aria-label="Close popup"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[calc(90vh-80px)] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioTabs;