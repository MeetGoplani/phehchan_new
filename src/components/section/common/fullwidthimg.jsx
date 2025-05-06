"use client"

import React, { useEffect, useState } from 'react';

const FullWidthBanner = ({
  altText = "Banner Image",
  overlay = false,
  overlayColor = "rgba(0, 0, 0, 1)",
  title = "Phehchan",
  subtitle = "We help brands make their content legally strong.",
  buttonText = "Book a call",
  buttonLink = "https://cal.com/phehchan",
  gradientStart = "black",
  gradientEnd = "black",
  logoUrl = "/Untitled-3.png",
  showLogo = true,
  customTitle = "",
  customSubtitle = "",
}) => {
  const [height, setHeight] = useState("100vh");

  // Set the banner height to match the viewport height
  useEffect(() => {
    const updateHeight = () => {
      setHeight(`${window.innerHeight}px`);
    };

    // Initial height
    updateHeight();

    // Update height on resize
    window.addEventListener("resize", updateHeight);

    // Cleanup
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height,
        background: `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`,
      }}
    >
      {/* Circular pattern overlay */}
      <div className="absolute inset-0 w-full h-full">
        {/* Concentric semi-circles at the bottom */}
        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "200px",
            height: "100px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "100px",
            borderTopRightRadius: "100px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "400px",
            height: "200px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "200px",
            borderTopRightRadius: "200px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "600px",
            height: "300px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "300px",
            borderTopRightRadius: "300px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "800px",
            height: "400px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "400px",
            borderTopRightRadius: "400px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "1000px",
            height: "500px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "500px",
            borderTopRightRadius: "500px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "1200px",
            height: "600px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "600px",
            borderTopRightRadius: "600px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "1400px",
            height: "700px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "700px",
            borderTopRightRadius: "700px",
          }}
        ></div>
      </div>

      {/* Optional Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: overlayColor }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4 max-w-5xl mx-auto">
        {/* Logo (optional) */}
        {showLogo && (
          <div className="m-0">
            <img
              src={logoUrl}
              alt={title || "Phehchan"}
              className="w-96 md:w-[500px] mx-auto"
            />
          </div>
        )}

        {/* Custom Title (if provided) */}
        {customTitle && (
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 mt-4">
            {customTitle}
          </h1>
        )}

        {/* Custom Subtitle or Default Subtitle */}
        {(customSubtitle || subtitle) && (
          <p className="text-lg md:text-xl text-white mb-8 max-w-2xl mt-24">
            {customSubtitle || subtitle}
          </p>
        )}

        {buttonText && (
          <a
            href={buttonLink}
            className="inline-flex items-center px-6 py-3 bg-white text-pink-600 rounded-full font-medium hover:bg-opacity-90 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default FullWidthBanner;