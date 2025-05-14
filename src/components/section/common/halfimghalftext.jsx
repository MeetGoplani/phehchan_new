"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";

const HalfImageHalfText = ({
  subtitle = "",
  title = "Meet Apurva",
  name = "Brands & Communication Expert",
  description = "With over twelve years in the creative industry as a professional photographer, Apurva Mehra has cultivated a sharp eye for aesthetics, storytelling, and innovation. His journey later expanded into the world of law, where he graduated with an LLB in Business Administration from Auro University. This unique combination of creative vision and strategic, detail-driven thinking sets him apart as a leader.Fueling his passion for branding and marketing, Apurva further honed his skills at the Advertising Standards Council of India (ASCI), where he deepened his understanding of brand communication ethics and standards.Apurva merges creativity, legal expertise, and strategic brand building to craft identities that are authentic, impactful, and enduring. His leadership is rooted in a belief that real brands aren't built overnight; they are shaped by passion, clarity, and resilience over time.",
  imageUrl = "/imgphehchan.png",
  imageAlt = "Profile image",
  imagePosition = "right",
  backgroundColor = "#ffffff",
  textColor = "#000000",
  certifications = [
    { image: "/bcoi.png", alt: "The Bar Council Of India" },
    { image: "/tbcog.png", alt: "The Bar Council Of Gujarat" },
  ],
  primaryButtonText = "Book a call",
  primaryButtonLink = "https://cal.com/phehchan",
  secondaryButtonText = "View Profile",
  secondaryButtonLink = "https://www.linkedin.com/in/apurvmehraa/",
  videoUrl = "/meetapurva.mp4",
}) => {
  const isImageRight = imagePosition === "right";
  const contentRef = useRef(null);
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const [contentHeight, setContentHeight] = useState("auto");
  const [isPlaying, setIsPlaying] = useState(false);

  // Measure the height of just the content area (up to the certifications)
  useEffect(() => {
    if (contentRef.current) {
      const updateHeight = () => {
        // Get the height of the content section only
        const height = contentRef.current.offsetHeight;
        // Apply a reduction factor to match the description end more precisely
        // Adjust this value as needed based on visual inspection
        setContentHeight(`${height - 40}px`);
      };

      // Initial measurement
      updateHeight();

      // Update on window resize
      window.addEventListener("resize", updateHeight);

      // Cleanup
      return () => window.removeEventListener("resize", updateHeight);
    }
  }, []);

  // Play video when it comes into view
  useEffect(() => {
    if (!videoRef.current || !videoContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Video is in view, but don't autoplay
          // User will need to click play button
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(videoContainerRef.current);

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current);
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full overflow-hidden py-6 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div
            className={`w-full md:w-3/5 flex flex-col justify-center ${
              isImageRight ? "pr-0 md:pr-12" : "pl-0 md:pl-12 order-2"
            }`}
            style={{ backgroundColor }}
          >
            <div className="px-6 max-w-xl mx-auto md:mx-0">
              <div ref={contentRef}>
                {subtitle && (
                  <p className="text-[#0f304f] font-medium uppercase tracking-wider mb-4">
                    {subtitle}
                  </p>
                )}

                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  {title}
                </h1>

                <div className="text-lg space-y-4 text-gray-700 mb-8">
                  <p>
                    <span className="font-bold">
                      {name}
                      <br></br>
                    </span>{" "}
                    {description}
                  </p>
                </div>
              </div>

              {certifications && certifications.length > 0 && (
                <div className="flex items-center space-x-6 mb-8">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <img
                        src={cert.image}
                        alt={cert.alt}
                        className="h-16 object-contain"
                      />
                      <p className="text-sm font-medium text-gray-700">
                        {cert.alt}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-4 mb-8 md:mb-0">
                {primaryButtonText && (
                  <Link
                    href={primaryButtonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#0f304f] text-white rounded-full font-medium hover:bg-blue-900 transition-colors"
                  >
                    {primaryButtonText}
                  </Link>
                )}

                {secondaryButtonText && (
                  <Link
                    href={secondaryButtonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-gray-700 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center"
                  >
                    {secondaryButtonText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Video Section (replacing Image Section) */}
          <div
            className={`w-full md:w-2/5 ${isImageRight ? "" : "order-1"} flex justify-center items-center`}
          >
            <div
              ref={videoContainerRef}
              className="bg-white overflow-hidden relative w-11/12 md:w-10/12"
              style={{
                height: contentHeight,
                maxWidth: "353px",
              }}
            >
              <video
                ref={videoRef}
                src={videoUrl}
                alt={imageAlt}
                className="w-full h-full object-contain"
                loop
                controls
                playsInline
                style={{
                  boxShadow: "0 20px 25px rgba(0, 0, 0, 0.8)",
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Custom Play Button - Only show when paused */}
              {!isPlaying && (
                <button
                  onClick={togglePlayPause}
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-4 shadow-lg hover:bg-opacity-90 transition-all z-10"
                  aria-label="Play video"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-[#0f304f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfImageHalfText;
