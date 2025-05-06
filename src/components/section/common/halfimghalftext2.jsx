"use client";

import React from "react";

const HalfImageHalfTextLeft = ({
  title = "nice to meet you",
  description = "We're passionate about what we do. Our journey started with a simple idea that grew into something special. We're committed to excellence and dedicated to solving problems for our clients.",
  imageAlt = "Featured image",
  backgroundColor = "#FEF6E6",
  textColor = "#000000",
}) => {
  // Define a zigzag path
  const zigzagPath = "M0,0 L5,10 L0,20 L5,30 L0,40 L5,50 L0,60 L5,70 L0,80 L5,90 L0,100";
  
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Image Section - Always on left for desktop */}
        <div className="w-full md:w-1/2 min-h-[500px] relative">
          <img
            src="/imgphehchan.png"
            alt={imageAlt}
            className="h-full object-cover"
          />
        </div>
        
        {/* Text Section - Always on right for desktop */}
        <div 
          className="w-full md:w-1/2 py-16 flex flex-col justify-center"
          style={{ backgroundColor }}
        >
          <div className="px-6 md:px-12 max-w-md mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{ color: textColor }}
            >
              {title}
            </h2>
            <div
              className="text-base md:text-lg space-y-4"
              style={{ color: textColor }}
            >
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Zigzag Divider */}
      <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <svg 
          height="100%" 
          width="10" 
          viewBox="0 0 10 100" 
          preserveAspectRatio="none"
        >
          <path 
            d={zigzagPath} 
            fill="none" 
            stroke="#000000" 
            strokeWidth="6"
          />
        </svg>
      </div>
    </div>
  );
};

export default HalfImageHalfTextLeft;