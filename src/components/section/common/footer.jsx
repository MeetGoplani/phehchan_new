import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Curved top shape */}
      <div
        className="absolute top-0 left-0 w-full overflow-hidden"
        style={{ transform: "translateY(-99%)" }}
      >
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
        >
          <path
            d="M600,112C268.63,112,0,75.33,0,32V120H1200V32C1200,75.33,931.37,112,600,112Z"
            className="fill-black"
          ></path>
        </svg>
      </div>

      {/* Footer content */}
      <div className="bg-black text-white pt-16 pb-18 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Main footer content */}
          <div className="flex flex-col md:flex-row justify-between mb-12">
            {/* Mobile navigation links - only visible on mobile */}
            <div className="md:hidden w-full mb-6">
              <Link href="/about" className="block mb-2">
                <h3 className="text-md font-medium hover:text-gray-400 transition-colors">
                  ABOUT US
                </h3>
              </Link>
              <Link href="/contact" className="block">
                <h3 className="text-md font-medium hover:text-gray-400 transition-colors">
                  CONTACT US
                </h3>
              </Link>
            </div>

            {/* Left address */}
            <div className="mb-8 md:mb-0 md:w-1/3">
              <p className="text-sm mb-1">Phehchan Brand Solutions</p>
              <p className="text-sm mb-1">511, 5th Floor, SNS Platina,</p>
              <p className="text-sm mb-1">nr. Someshwara Enclave,</p>
              <p className="text-sm mb-1">Vesu, Surat,</p>
              <p className="text-sm">Gujarat 395007</p>
            </div>

            {/* Center - Contact Us - hidden on mobile */}
            <div className="hidden md:flex mb-0 md:mb-0 md:w-1/3 justify-center">
              <div>
                <Link href="/about" className="block">
                  <h3 className="text-md font-medium mb-2 pb-0 inline-block hover:text-gray-400 transition-colors">
                    ABOUT US
                  </h3>
                </Link>

                <Link href="/contact" className="block mt-1">
                  <h3 className="text-md font-medium mb-0 pb-0 inline-block hover:text-gray-400 transition-colors">
                    CONTACT US
                  </h3>
                </Link>
              </div>
            </div>

            {/* Right side - Social media icons and contact info */}
            <div className="md:w-1/3 md:text-right">
              {/* Contact information */}
              <div className="mb-4">
                <p className="text-sm mb-1">
                  <span className="font-medium">Phone:</span>{" "}
                  <a href="tel:+918980007005" className="hover:underline">
                    +91 8980007005
                  </a>
                </p>
                <p className="text-sm mb-3">
                  <span className="font-medium">Email:</span>{" "}
                  <a href="mailto:contact@phehchan.com" className="hover:underline">
                    contact@phehchan.com
                  </a>
                </p>
              </div>

              {/* Social media icons - left aligned on mobile, right aligned on desktop */}
              <div className="flex md:justify-end space-x-4 mb-4">
                <Link
                  href="https://www.instagram.com/phehchan.brandsolutions?igsh=NnI4MXFsZGVjNDhv"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.linkedin.com/company/phehchan-brand-solutions/"
                  className="text-white hover:text-gray-400 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
              <p className="text-xs md:text-right">
                © 2024 Phehchan. All rights reserved.
              </p>
            </div>
          </div>

          {/* Links - Now centered */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-xs hover:text-gray-400 transition-colors"
              >
                The information presented on this website is not legal advice.
                We encourage you to perform further research on the topics
                described here, and if you have any questions or would like to
                speak to one of our immigration lawyers, please do not hesitate
                to contact us. Submitting any forms on this website does not
                automatically establish a client-lawyer relationship
              </Link>
            </div>
          </div>

          {/* Bottom footer - removed copyright text from here */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Left side is now empty */}
            <div className="mb-4 md:mb-0">
              {/* Copyright text moved to right section under social media links */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;