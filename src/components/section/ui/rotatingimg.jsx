"use client"

import React, { useEffect, useRef } from 'react';
import { motion, useAnimationControls } from 'framer-motion';
import { partnerLogos } from '@/lib/constants';

const LogoSlider = () => {
  const containerRef = useRef(null);
  const controls = useAnimationControls();
  const logoSetRef = useRef(null);
  
  useEffect(() => {
    // Wait for the component to mount and measure the actual width
    if (containerRef.current && logoSetRef.current) {
      const actualWidth = logoSetRef.current.offsetWidth;
      
      // Start the animation with the measured width
      controls.start({
        x: -actualWidth,
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        },
      });
    }
  }, [controls]);
  
  return (
    <div className="w-full bg-white py-8 overflow-hidden">
      <div className="container mx-auto mb-4">
        {/* <h3 className="text-2xl font-semibold text-center mb-6">Our Clients</h3> */}
      </div>
      
      <div ref={containerRef} className="relative w-full overflow-hidden">
        <div className="flex items-center">
          <motion.div
            className="flex items-center space-x-12 px-4"
            initial={{ x: 0 }}
            animate={controls}
          >
            {/* First set of logos - this will be measured for animation */}
            <div ref={logoSetRef} className="flex items-center space-x-12">
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
            </div>
            
            {/* Duplicate logos for seamless loop */}
            <div className="flex items-center space-x-12">
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
            </div>
            
            {/* Add a third set to ensure smooth looping */}
            <div className="flex items-center space-x-12">
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
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;