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

        {/* Additional semicircles for larger screens */}
        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "1600px",
            height: "800px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "800px",
            borderTopRightRadius: "800px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "1800px",
            height: "900px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "900px",
            borderTopRightRadius: "900px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "2000px",
            height: "1000px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "1000px",
            borderTopRightRadius: "1000px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "2200px",
            height: "1100px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "1100px",
            borderTopRightRadius: "1100px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "2400px",
            height: "1200px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "1200px",
            borderTopRightRadius: "1200px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "2600px",
            height: "1300px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "1300px",
            borderTopRightRadius: "1300px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "2800px",
            height: "1400px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "1400px",
            borderTopRightRadius: "1400px",
          }}
        ></div>

        <div
          className="absolute border-t-2 border-white opacity-10 rounded-t-full"
          style={{
            width: "3000px",
            height: "1500px",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)",
            borderTopLeftRadius: "1500px",
            borderTopRightRadius: "1500px",
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
          <h1 className="sm:text-2xl md:text-2xl  mt-8 font-bold text-white mb-0">
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
