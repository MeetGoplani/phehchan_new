"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

// Custom hook for media query
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);
    setMatches(media.matches);

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

const Project52Button = () => {
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll();
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Transform scale based on scroll position
  const scale = useTransform(
    scrollYProgress,
    [0.85, 0.95], // When we're 85-95% down the page
    [1, 0.8] // Scale from 100% to 80%
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if we're near the footer (within 300px of the bottom)
      setIsNearFooter(scrollPosition + windowHeight > documentHeight - 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed bottom-5 left-8 z-50"
      style={{ scale }}
      whileHover={isNearFooter ? {} : { scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <Link
        href="https://project52.in/"
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center gap-2 bg-red-500 text-white rounded-2xl px-4 py-3 shadow-lg hover:bg-red-600 transition-colors duration-200`}
        style={
          isMobile
            ? {
                width: "70px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0",
              }
            : {}
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Desktop */}
        {!isMobile && (
          <>
            {isHovered ? (
              <div className="flex items-center gap-1">
                <span className="text-sm font-medium">Project 52</span>
                <span className="text-xs">by Phehchan Tech</span>
              </div>
            ) : (
              <Image
                src="/logo52.png"
                alt="Project 52"
                width={30}
                height={30}
                className="md:block hidden"
              />
            )}
          </>
        )}
        {/* Mobile-only content */}
        {isMobile && (
          <Image
            src="/logo52.png"
            alt="Project 52"
            width={30}
            height={30}
            className="md:hidden block"
          />
        )}
      </Link>
    </motion.div>
  );
};

export default Project52Button;
