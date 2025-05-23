"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const FAQWithImage = ({
  title = "Our process for developing customer centric growth strategies",
  items,
  imageSrc = "/process-image.jpg",
  imageAlt = "Growth strategy process",
}) => {
  // Initialize with Step One (index 0) open
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageHeight, setImageHeight] = useState(500);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const resizeObserverRef = useRef(null);

  // Calculate minimum height based on number of items
  const minHeight = items ? Math.max(300, items.length * 100) : 300;

  useEffect(() => {
    // Set initial height
    setImageHeight(minHeight);

    // Function to update image height based on content height
    const updateImageHeight = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.offsetHeight;
        setImageHeight(Math.max(minHeight, contentHeight));
      }
    };

    // Call once on mount
    updateImageHeight();

    // Initialize ResizeObserver to monitor content height changes
    if (contentRef.current && !resizeObserverRef.current) {
      resizeObserverRef.current = new ResizeObserver(() => {
        updateImageHeight();
      });

      resizeObserverRef.current.observe(contentRef.current);
    }

    // Also update on window resize
    window.addEventListener('resize', updateImageHeight);

    // Cleanup observer on unmount
    return () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
      window.removeEventListener('resize', updateImageHeight);
    };
  }, [items, minHeight]);

  // Update height when active index changes
  useEffect(() => {
    // Small timeout to allow the animation to start
    const timer = setTimeout(() => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.offsetHeight;
        setImageHeight(Math.max(minHeight, contentHeight));
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [activeIndex, minHeight]);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col md:flex-row">
        {/* Left side - Image (30%) */}
        <div className="w-full md:w-[30%] relative">
          <div
            ref={imageRef}
            style={{ height: `${imageHeight}px` }}
            className="transition-all duration-500 ease-in-out"
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={imageHeight}
              className="w-full h-full object-contain"
              priority
            />
            {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-300 via-teal-200 to-yellow-100 opacity-50 mix-blend-overlay" /> */}
          </div>
        </div>

        {/* Right side - FAQ content (70%) */}
        <div
          ref={contentRef}
          className="w-full md:w-[70%] bg-white p-8 md:p-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            {title}
          </h2>

          <div className="space-y-2">
            {items.map((item, index) => (
              <div key={item.id} className="border-b border-gray-200">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                >
                  <span className="font-medium text-gray-800">
                    {item.title}
                  </span>
                  <ChevronDownIcon
                    className={`w-5 h-5 transition-transform ${
                      activeIndex === index ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                      onAnimationComplete={() => {
                        // Update height after animation completes
                        if (contentRef.current) {
                          const contentHeight = contentRef.current.offsetHeight;
                          setImageHeight(Math.max(minHeight, contentHeight));
                        }
                      }}
                    >
                      <div className="pb-4 text-gray-600">{item.content}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQWithImage;
