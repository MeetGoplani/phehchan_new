"use client";

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ThreePartText = ({ 
  heading, 
  subheading, 
  content, 
  rightContent,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className="py-6 sm:py-8 md:py-12">
      <div className="container mx-auto px-2 sm:px-4">
        {/* Main Heading - Top */}
        <motion.h1 
          className="pt-8 sm:pt-12 text-4xl sm:text-5xl md:text-7xl font-black text-center mb-8 sm:mb-12 md:mb-16 tracking-tight leading-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {heading}
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Left Column - Subheading */}
          <motion.div 
            className="md:col-span-3 mb-4 md:mb-0"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-lg sm:text-xl font-bold leading-tight">
              {subheading}
            </h2>
          </motion.div>
          
          {/* Middle Column - Main Content */}
          <motion.div 
            className="md:col-span-6 mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              {content}
            </p>
          </motion.div>
          
          {/* Right Column - Bullet Points */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-4 sm:space-y-6">
              {rightContent && rightContent.map((section, index) => (
                <div key={index} className="mb-2 sm:mb-4">
                  <h3 className="font-medium mb-1 sm:mb-2 text-base sm:text-lg">{section.title}</h3>
                  <ul className="space-y-1 sm:space-y-2">
                    {section.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start">
                        <span className="mr-2 mt-1">•</span>
                        <span className="text-xs sm:text-sm text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThreePartText;