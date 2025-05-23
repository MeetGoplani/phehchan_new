"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { portfolioImages } from "@/lib/constants";
import { useSearchParams, useRouter } from "next/navigation";

const PortfolioTabs = () => {
  // Get company names from the portfolioImages object
  const companies = Object.keys(portfolioImages);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the tab from URL parameters or default to first company
  const tabParam = searchParams.get("tab");
  const initialTab = companies.includes(tabParam) ? tabParam : companies[0];

  const [activeTab, setActiveTab] = useState(initialTab);
  const tabsRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [initialLoadComplete, setInitialLoadComplete] = useState(false);

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (tabsRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Initialize and set up scroll event listeners
  useEffect(() => {
    if (tabsRef.current) {
      checkScrollPosition();
      tabsRef.current.addEventListener("scroll", checkScrollPosition);

      // Only scroll to active tab on initial load
      if (!initialLoadComplete) {
        scrollToActiveTab();
        setInitialLoadComplete(true);
      }
    }

    return () => {
      if (tabsRef.current) {
        tabsRef.current.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, [initialLoadComplete]);

  // Update active tab when URL parameter changes, but don't auto-scroll
  useEffect(() => {
    if (tabParam && companies.includes(tabParam)) {
      setActiveTab(tabParam);
      // Don't auto-scroll when URL changes
    }
  }, [tabParam, companies]);

  // Scroll to active tab - only used on initial load
  const scrollToActiveTab = () => {
    if (tabsRef.current) {
      const activeTabElement = tabsRef.current.querySelector(
        `button[data-tab="${activeTab}"]`
      );
      if (activeTabElement) {
        const containerWidth = tabsRef.current.clientWidth;
        const scrollPosition =
          activeTabElement.offsetLeft -
          containerWidth / 2 +
          activeTabElement.clientWidth / 2;
        tabsRef.current.scrollTo({ left: scrollPosition, behavior: "smooth" });
      }
    }
  };

  // Handle tab scrolling
  const scrollTabs = (direction) => {
    if (tabsRef.current) {
      const scrollAmount = direction === "left" ? -200 : 200;
      tabsRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Open image in modal
  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
  };

  // Close modal
  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  // Update URL when tab changes
  const handleTabChange = (tab) => {
    setActiveTab(tab);

    // Update URL with the new tab parameter
    const url = new URL(window.location);
    url.searchParams.set("tab", tab);
    window.history.pushState({}, "", url);
    
    // Don't auto-scroll to the selected tab
  };

  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-4xl font-bold text-center mb-12">Our Portfolio</h2> */}

        {/* Tabs Navigation with Arrows Outside */}
        <div className="flex items-center mb-8">
          {/* Left Arrow - Outside the tabs */}
          <button
            onClick={() => scrollTabs("left")}
            className={`flex-shrink-0 bg-white rounded-full p-2 shadow-sm transition-opacity duration-300 ${
              showLeftArrow ? "opacity-100" : "opacity-50 cursor-not-allowed"
            }`}
            aria-label="Scroll tabs left"
            disabled={!showLeftArrow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Scrollable Tabs Container */}
          <div
            ref={tabsRef}
            className="flex-1 overflow-x-auto whitespace-nowrap mx-2 no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <div className="flex space-x-4 py-2">
              {companies.map((company) => (
                <button
                  key={company}
                  data-tab={company}
                  onClick={() => handleTabChange(company)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full transition-colors flex-shrink-0 ${
                    activeTab === company
                      ? "bg-[#0f304f] text-white"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {company}
                </button>
              ))}
            </div>
          </div>

          {/* Right Arrow - Outside the tabs */}
          <button
            onClick={() => scrollTabs("right")}
            className={`flex-shrink-0 bg-white rounded-full p-2 shadow-sm transition-opacity duration-300 ${
              showRightArrow ? "opacity-100" : "opacity-50 cursor-not-allowed"
            }`}
            aria-label="Scroll tabs right"
            disabled={!showRightArrow}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        {/* Image Grid - Max 4 per row, equal size, clickable */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioImages[activeTab].map((image) => (
            <div
              key={image.id}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              onClick={() => openImage(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-square object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Image Popup Modal (instead of fullscreen) */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden shadow-2xl max-w-4xl w-full max-h-[90vh] relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-2 bg-white flex justify-between items-center border-b">
              <h3 className="text-lg font-medium text-gray-900 truncate">
                {selectedImage.alt}
              </h3>
              <button
                className="text-gray-400 hover:text-gray-500 focus:outline-none"
                onClick={closeModal}
                aria-label="Close popup"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center p-4">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[calc(90vh-80px)] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioTabs;
