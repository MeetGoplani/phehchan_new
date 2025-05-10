"use client";

import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const servicesRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const pathname = usePathname();

  // Add this toggle function
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  // Add this toggle function for services dropdown
  const toggleServicesDropdown = () => {
    setIsServicesOpen((prev) => !prev);
  };
  const navItems = [
    { name: "Home", path: "/", icon: "home" },
    { name: "About", path: "/about", icon: null },
    { name: "Tech", path: "/tech", icon: null },
    { name: "Portfolio", path: "/Portfolio", icon: null },
    { name: "Blogs", path: "/blogs", icon: null },
    { name: "Other Capabilities", path: "#", icon: null, isDropdown: true },
    { name: "Contact", path: "/contact", icon: null },
  ];

  const serviceItems = [
    { name: "Tech", path: "/Tech", icon: null },
    { name: "Marketing", path: "/ads", icon: null },
  ];

  // Function to check if footer is visible
  useEffect(() => {
    const checkFooterVisibility = () => {
      if (typeof window === "undefined") return; // Add this check

      const footer = document.querySelector("footer");
      if (footer) {
        const footerRect = footer.getBoundingClientRect();
        const isFooterVisible = footerRect.top < window.innerHeight;
        setIsMinimized(isFooterVisible);
      }
    };

    // Initial check - only run on client
    if (typeof window !== "undefined") {
      checkFooterVisibility();

      // Add scroll event listener
      window.addEventListener("scroll", checkFooterVisibility);

      // Cleanup
      return () => window.removeEventListener("scroll", checkFooterVisibility);
    }
  }, []);

  // Function to render appropriate icon based on name or current page
  const renderIcon = (iconName) => {
    if (iconName === "home") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      );
    } else if (iconName === "about") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      );
    } else if (iconName === "tech") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    } else if (iconName === "services") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      );
    } else if (iconName === "contact") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      );
    } else if (iconName === "hamburger") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-7"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      );
    }
    return null;
  };

  // Function to determine which icon to show when minimized
  const getMinimizedIcon = () => {
    // Check current path and return appropriate icon
    if (pathname === "/about") {
      return renderIcon("about");
    } else if (pathname === "/tech" || pathname === "/Tech") {
      return renderIcon("tech");
    } else if (
      pathname.includes("/ads") ||
      pathname.includes("/law") ||
      pathname.includes("/Law")
    ) {
      return renderIcon("services");
    } else if (pathname === "/contact") {
      return renderIcon("contact");
    } else {
      // Default to home icon
      return renderIcon("home");
    }
  };

  // Function to check if a service item is active
  const isServiceActive = (path) => {
    return pathname === path || pathname.toLowerCase() === path.toLowerCase();
  };

  // Function to check if any service item is active
  const isAnyServiceActive = () => {
    return serviceItems.some((item) => isServiceActive(item.path));
  };

  // Updated animation variants
  const navVariants = {
    expanded: {
      width: "100%",
      maxWidth: "1000px", // Increased from 800px to 1000px to fit all menu items
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    minimized: {
      width: "70px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    mobileExpanded: {
      width: "100%",
      height: "64px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    mobileMinimized: {
      width: "70px",
      height: "64px",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
        delay: 0.1,
      },
    },
  };

  // Updated dropdown variants for expanding above the navbar
  const dropdownVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: {
          duration: 0.3,
          ease: "easeInOut",
        },
        opacity: {
          duration: 0.2,
          delay: 0.1,
        },
      },
    },
  };

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  // Handle clicks outside the services menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setIsServicesOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Determine which animation variant to use - make safe for SSR
  const getNavVariant = () => {
    if (typeof window === "undefined") {
      // Default for server-side rendering
      return "expanded";
    }

    if (window.innerWidth <= 768) {
      // Mobile
      return isMobileMenuOpen ? "mobileExpanded" : "mobileMinimized";
    } else {
      // Desktop
      return isMinimized ? "minimized" : "expanded";
    }
  };

  return (
    <div
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-40 mx-auto w-full max-w-4xl"
      onMouseEnter={() => isMinimized && setIsMinimized(false)}
      onMouseLeave={() => {
        if (typeof window === "undefined") return; // Add this check

        const footer = document.querySelector("footer");
        if (footer) {
          const footerRect = footer.getBoundingClientRect();
          const isFooterVisible = footerRect.top < window.innerHeight;
          if (isFooterVisible) {
            setIsMinimized(true);
          }
        }
      }}
    >
      {/* Mobile Menu - Position it higher to avoid overlap */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="absolute bottom-[72px] left-0 w-full bg-[#0f304f] rounded-xl shadow-lg overflow-hidden md:hidden"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex flex-col">
              <Link
                href="/"
                className={`px-6 py-4 hover:bg-[#0f304f]/80 transition-colors duration-200 text-base block ${
                  pathname === "/"
                    ? "text-[#0f304f] bg-white bg-opacity-90"
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-6 py-4 hover:bg-[#0f304f]/80 transition-colors duration-200 text-base block ${
                  pathname === "/about"
                    ? "text-[#0f304f] bg-white bg-opacity-90"
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/Law"
                className={`px-6 py-4 hover:bg-[#0f304f]/80 transition-colors duration-200 text-base block ${
                  pathname === "/Law"
                    ? "text-[#0f304f] bg-white bg-opacity-90"
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Law
              </Link>
              <Link
                href="/Portfolio"
                className={`px-6 py-4 hover:bg-[#0f304f]/80 transition-colors duration-200 text-base block ${
                  pathname === "/Portfolio"
                    ? "text-[#0f304f] bg-white bg-opacity-90"
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className={`px-6 py-4 hover:bg-[#0f304f]/80 transition-colors duration-200 text-base block ${
                  pathname === "/blog"
                    ? "text-[#0f304f] bg-white bg-opacity-90"
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </Link>

              {/* Other Capabilities dropdown with toggle */}
              <div className="border-t border-[#0f304f]/40">
                <button
                  className={`px-6 py-4 hover:bg-[#0f304f]/80 transition-colors duration-200 text-base block w-full text-left flex justify-between items-center ${
                    isAnyServiceActive()
                      ? "text-[#0f304f] bg-white bg-opacity-90"
                      : "text-white"
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleServicesDropdown(); // Use the toggle function
                  }}
                >
                  <span>Other Capabilities</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 transition-transform ${
                      isServicesOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Collapsible service items */}
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden bg-[#0f304f]"
                    >
                      {serviceItems.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.path}
                          className={`px-10 py-4 hover:bg-[#0f304f]/80 transition-colors duration-200 text-base block ${
                            isServiceActive(service.path)
                              ? "text-[#0f304f] bg-white bg-opacity-90"
                              : "text-white"
                          }`}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setIsServicesOpen(false);
                          }}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/contact"
                className={`px-6 py-4 hover:bg-[#0f304f]/80 transition-colors duration-200 text-base block ${
                  pathname === "/contact"
                    ? "text-[#0f304f] bg-white bg-opacity-90 !mr-8" // Added pr-8 for right padding
                    : "text-white"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        ref={servicesRef}
        className="relative"
        onMouseLeave={() => setIsServicesOpen(false)}
      >
        {/* Position the dropdown above the navbar */}
        <AnimatePresence>
          {isServicesOpen && !isMinimized && !isMobileMenuOpen && (
            <motion.div
              className="bg-[#0f304f] rounded-t-xl shadow-lg overflow-hidden mb-0 mx-auto hidden md:block"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={dropdownVariants}
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div className="flex flex-col">
                {serviceItems.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: serviceIndex * 0.1 }}
                  >
                    <Link
                      href={service.path}
                      className={`px-10 py-4 hover:bg-[#0f304f]/80 transition-colors duration-200 text-base block ${
                        isServiceActive(service.path)
                          ? "text-[#0f304f] bg-white bg-opacity-90"
                          : "text-white"
                      }`}
                    >
                      {service.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.nav
          className={`bg-[#0f304f] shadow-lg rounded-3xl overflow-hidden ${
            isServicesOpen && !isMobileMenuOpen ? "md:rounded-t-none" : ""
          } mx-auto`}
          variants={navVariants}
          animate={getNavVariant()}
          initial={false}
          style={{
            height: "64px",
            maxHeight: "64px",
            width: isMobileMenuOpen ? "70px" : null,
            maxWidth: isMobileMenuOpen ? "70px" : null,
          }}
        >
          <div className="flex items-center h-16 relative justify-around">
            {/* Mobile Hamburger Button */}
            <div className="md:hidden flex items-center justify-center text-white p-1">
              <button
                className="bg-white bg-opacity-90 text-[#0f304f] rounded-full flex items-center justify-center w-full h-full"
                onClick={toggleMobileMenu} // Use the toggle function
                aria-label="Toggle menu"
                style={{ width: "48px", height: "48px", padding: "0" }}
              >
                <div
                  className="flex items-center justify-center w-full h-full"
                  style={{ cursor: "pointer" }}
                >
                  {isMobileMenuOpen ? (
                    // X icon when menu is open
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ pointerEvents: "none" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    // Hamburger icon when menu is closed
                    renderIcon("hamburger")
                  )}
                </div>
              </button>
            </div>

            {/* Desktop Home Icon */}
            <div className="hidden md:flex items-center justify-center text-white p-1">
              {isMinimized ? (
                <div
                  className={`flex items-center justify-center bg-white bg-opacity-90 text-[#0f304f] rounded-3xl p-4`}
                >
                  {getMinimizedIcon()}
                </div>
              ) : (
                <Link
                  href="/"
                  className={`flex items-center justify-center ${
                    pathname === "/"
                      ? "bg-white bg-opacity-90 text-[#0f304f]"
                      : " text-white"
                  } rounded-full p-4`}
                >
                  {renderIcon("home")}
                </Link>
              )}
            </div>

            <AnimatePresence>
              {!isMinimized && (
                <motion.div
                  className="hidden md:flex flex-1 justify-around items-center pl-4 pr-4 space-x-1"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={itemVariants}
                >
                  <Link
                    href="/about"
                    className={`px-3 py-2 font-medium rounded-full transition-colors duration-200 ${
                      pathname === "/about"
                        ? "bg-white bg-opacity-90 text-[#0f304f]"
                        : "text-white"
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    href="/Law"
                    className={`px-3 py-2 font-medium rounded-full transition-colors duration-200 ${
                      pathname === "/Law"
                        ? "bg-white bg-opacity-90 text-[#0f304f]"
                        : "text-white"
                    }`}
                  >
                    Law
                  </Link>
                  <Link
                    href="/Portfolio"
                    className={`px-3 py-2 font-medium rounded-full transition-colors duration-200 ${
                      pathname === "/Portfolio"
                        ? "bg-white bg-opacity-90 text-[#0f304f]"
                        : "text-white"
                    }`}
                  >
                    Portfolio
                  </Link>
                  <Link
                    href="/blog"
                    className={`px-3 py-2 font-medium rounded-full transition-colors duration-200 ${
                      pathname === "/blog"
                        ? "bg-white bg-opacity-90 text-[#0f304f]"
                        : "text-white"
                    }`}
                  >
                    Blog
                  </Link>

                  {/* Services Dropdown */}
                  <div
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                  >
                    <button
                      className={`px-3 py-2 font-medium rounded-full transition-colors duration-200 flex items-center ${
                        isAnyServiceActive()
                          ? "bg-white bg-opacity-90 text-[#0f304f]"
                          : "text-white"
                      }`}
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      Other Capabilities
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 ml-1 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  <Link
                    href="/contact"
                    className={`px-3 py-2 font-medium rounded-full transition-colors duration-200 ${
                      pathname === "/contact"
                        ? "bg-white bg-opacity-90 text-[#0f304f]"
                        : "text-white"
                    }`}
                  >
                    Contact
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.nav>
      </div>
    </div>
  );
};

export default Navbar;
