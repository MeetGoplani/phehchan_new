"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { partnerLogos } from '@/lib/constants';

const LogoSlider = () => {
  // Calculate total width needed for a single set of logos
  const singleSetWidth = partnerLogos.reduce((total, logo) => {
    // Each logo has its width plus the space-x-12 (3rem = 48px)
    return total + (parseInt(logo.width) || 128) + 48;
  }, 0);
  
  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <div className="container mx-auto mb-4">
        {/* <h3 className="text-2xl font-semibold text-center mb-6">Our Clients</h3> */}
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center">
          <motion.div
            className="flex items-center space-x-12 px-4"
            initial={{ x: 0 }}
            animate={{ x: -singleSetWidth }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {/* First set of logos */}
            {partnerLogos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex-shrink-0" style={{
                height: logo.height || '3rem',
                width: logo.width || '8rem'
              }}>
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
            
            {/* Duplicate logos for seamless loop */}
            {partnerLogos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="flex-shrink-0" style={{
                height: logo.height || '3rem',
                width: logo.width || '8rem'
              }}>
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
            
            {/* Add a third set to ensure smooth looping */}
            {partnerLogos.map((logo, index) => (
              <div key={`logo-3-${index}`} className="flex-shrink-0" style={{
                height: logo.height || '3rem',
                width: logo.width || '8rem'
              }}>
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;