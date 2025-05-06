"use client"

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { partnerLogos } from '@/lib/constants';

const LogoSlider = () => {
  const sliderRef = useRef(null);
  
  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <div className="container mx-auto mb-4">
        {/* <h3 className="text-2xl font-semibold text-center mb-6">Our Clients</h3> */}
      </div>
      
      <div className="relative w-full overflow-hidden">
        <div className="flex items-center">
          {/* First set of logos */}
          <motion.div
            className="flex items-center space-x-12 px-4"
            animate={{
              x: [0, -100 * partnerLogos.length],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear",
              },
            }}
          >
            {partnerLogos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="flex-shrink-0" style={{
                height: logo.height || '3rem', // Default to 3rem (equivalent to h-12) if not specified
                width: logo.width || '8rem'    // Default to 8rem (equivalent to w-32) if not specified
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
                height: logo.height || '3rem', // Fixed: Use 3rem instead of 13rem to match the first set
                width: logo.width || '8rem'    // Default to 8rem (equivalent to w-32) if not specified
              }}>
                <img
                  src={logo.image}
                  alt={logo.name}
                  style={{
                    height: logo.height || '3rem', // Fixed: Use 3rem instead of 13rem to match the first set
                    width: logo.width || '8rem'    // Default to 8rem (equivalent to w-32) if not specified
                  }}
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