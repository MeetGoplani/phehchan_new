"use client";

import React, { useEffect, useState } from "react";

const FullWidthBanner = ({
  altText = "Banner Image",
  overlay = false,
  overlayColor = "rgba(0, 0, 0, 1)",
  title = "Phehchan",
  subtitle = "Where Strategy Meets Storytelling — and Compliance Builds Trust.",
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
    // Only run this effect on the client side
    if (typeof window !== "undefined") {
      const updateHeight = () => {
        setHeight(`${window.innerHeight}px`);
      };

      // Initial height
      updateHeight();

      // Update height on resize
      window.addEventListener("resize", updateHeight);

      // Cleanup
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  // Use a default height for server-side rendering
  const bannerHeight = typeof window === "undefined" ? "100vh" : height;

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        height: bannerHeight,
      }}
    >
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videoplayback.mp4"
        autoPlay
        loop
        muted
        playsInline
        style={{ zIndex: 0 }}
      />

      {/* Optional Overlay */}
      {overlay && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{ backgroundColor: overlayColor, zIndex: 1 }}
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
          <h1 className="sm:text-2xl md:text-2xl mt-8 font-bold text-white mb-0">
            {customTitle}
          </h1>
        )}

        {/* Custom Subtitle or Default Subtitle */}
        {(customSubtitle || subtitle) && (
          <p className="text-2xl md:text-2xl text-white mt-0 max-w-2xl font-bold">
            {customSubtitle || subtitle}
          </p>
        )}

        {buttonText && (
          <a
            href={buttonLink}
            className="inline-flex items-center px-6 py-3 mt-15 bg-white text-[#0f304f] rounded-full font-medium hover:bg-opacity-90 transition-all"
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
