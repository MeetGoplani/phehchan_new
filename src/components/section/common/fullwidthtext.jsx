"use client";

import React from 'react';

const FullWidthText = ({
  companyName = "MOTIVUS Law",
  companyDescription = "is a Toronto-based  law firm primarily focusing on US and Canadian .",
  additionalText = "We are devoted to providing a first-rate customer experience through increased efficiency and unparalleled communication.",
  backgroundColor = "#f5f5f5",
  textColor = "#000000",
  textAlign = "center",
  padding = "py-16 md:py-24"
}) => {
  return (
    <div className={`w-full ${padding}`} style={{ backgroundColor }}>
      <div className="container mx-auto px-6 md:px-8">
        <div className={`max-w-4xl mx-auto text-${textAlign}`}>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 md:whitespace-nowrap">
            <span className="font-black">{companyName}</span>{" "}
            {companyDescription}
          </h2>

          {additionalText && (
            <p
              className="text-lg md:text-xl mt-6"
              style={{ color: textColor }}
            >
              {additionalText}
            </p>
          )}

          <div className="mt-8">
            <a
              href="https://cal.com/phehchan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-lg font-medium text-white bg-[#0f304f] rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              Let's Build Your Next Compliant Campaign
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidthText;