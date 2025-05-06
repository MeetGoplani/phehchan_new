"use client";

import React from 'react';

const FullWidthText = ({
  companyName = "MOTIVUS Law",
  companyDescription = "is a Toronto-based immigration law firm primarily focusing on US and Canadian Immigration.",
  additionalText = "We are devoted to providing a first-rate customer experience through increased efficiency and unparalleled communication.",
  backgroundColor = "#f5f5f5",
  textColor = "#000000",
  textAlign = "center",
  padding = "py-16 md:py-24"
}) => {
  return (
    <div 
      className={`w-full ${padding}`}
      style={{ backgroundColor }}
    >
      <div className="container mx-auto px-6 md:px-8">
        <div className={`max-w-4xl mx-auto text-${textAlign}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="font-black">{companyName}</span> {companyDescription}
          </h2>
          
          {additionalText && (
            <p className="text-lg md:text-xl mt-6" style={{ color: textColor }}>
              {additionalText}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FullWidthText;