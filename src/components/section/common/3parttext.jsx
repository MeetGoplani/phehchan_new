"use client";

import React from 'react';
import { motion } from 'framer-motion';

const ThreePartText = ({ 
  heading, 
  subheading, 
  content, 
  rightContent,
  waitlistLink,
  surveyLink
}) => {
  return (
    <section className="">
        
      <div className="container mx-auto px-4">
        {/* Main Heading - Top */}
        <motion.h1 
          className=" pt-12 text-7xl md:text-8xl font-black text-center mb-16 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {heading}
        </motion.h1>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Left Column - Subheading */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xl font-bold leading-tight">
              {subheading}
            </h2>
          </motion.div>
          
          {/* Middle Column - Main Content */}
          <motion.div 
            className="md:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-base text-gray-700 leading-relaxed">
              {content}
            </p>
          </motion.div>
          
          {/* Right Column - Additional Information */}
          <motion.div 
            className="md:col-span-3"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              {waitlistLink && (
                <div className="flex items-center">
                  <span className="mr-2">➔</span>
                  <a 
                    href={waitlistLink.url} 
                    className="font-medium hover:underline"
                  >
                    {waitlistLink.text}
                    <p className="text-sm text-gray-500">{waitlistLink.subtext}</p>
                  </a>
                </div>
              )}
              
              {surveyLink && (
                <div className="flex items-center">
                  <span className="mr-2">➔</span>
                  <a 
                    href={surveyLink.url} 
                    className="font-medium hover:underline"
                  >
                    {surveyLink.text}
                    <p className="text-sm text-gray-500">{surveyLink.subtext}</p>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ThreePartText;