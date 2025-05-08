import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { carouselData } from '@/lib/constants';

const TextCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? carouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="text-carousel-section py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Increased heading size */}
          <h3 className="text-4xl font-bold mb-10">Our Commitment to Excellence</h3>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Centered subtext */}
            <p className="text-lg text-gray-700 mb-8 text-center">
              {carouselData[currentIndex].subtext}
            </p>
            
            {/* Three pointers - centered and in a smaller box */}
            <div className="max-w-md mx-auto mb-8">
              <ul>
                {carouselData[currentIndex].points.map((point, index) => (
                  <li key={index} className="flex items-start mb-4">
                    <div className="h-6 w-6 rounded-full bg-blue-500 flex items-center justify-center text-white mr-3 flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-800 text-left">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Navigation arrows */}
            <div className="flex justify-between items-center">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                aria-label="Previous slide"
              >
                <FaArrowLeft />
              </button>
              
              <div className="flex space-x-2">
                {carouselData.map((_, index) => (
                  <span 
                    key={index} 
                    className={`h-2 w-2 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors"
                aria-label="Next slide"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextCarousel;