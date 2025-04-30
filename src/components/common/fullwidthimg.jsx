"use client"

import React from 'react';


const FullWidthBanner = ({ 
  imageUrl = "https://source.unsplash.com/random/1920x400?banner", 
  altText = "Banner Image",
  height = "400px",
  overlay = true,
  overlayColor = "rgba(0, 0, 0, 0.4)",
  title = "Welcome to Pehchan",
  subtitle = "Your trusted partner"
}) => {
  return (
    <div className="relative w-full" style={{ height }}>
      {/* Banner Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={imageUrl}
          alt={altText}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Optional Overlay */}
      {overlay && (
        <div 
          className="absolute inset-0 w-full h-full" 
          style={{ backgroundColor: overlayColor }}
        />
      )}
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4">
        {title && (
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="text-xl md:text-2xl text-white">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default FullWidthBanner;