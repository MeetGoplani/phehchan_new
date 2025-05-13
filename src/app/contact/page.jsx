"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThreePartText from '@/components/section/common/3parttext';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null); // Changed to store error message

  // Hide logo slider on this page with CSS
  useEffect(() => {
    // Create a style element
    const style = document.createElement('style');
    
    // Add CSS rules to hide logo sliders and Amazon logos
    style.textContent = `
      .logo-slider-container, 
      .logo-slider, 
      .amazon-logos,
      [class*="logo-slider"],
      img[src*="amazon"],
      div:has(> img[src*="amazon"]) {
        display: none !important;
      }
    `;
    
    // Add the style element to the document head
    document.head.appendChild(style);
    
    // Clean up when component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(null);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setSubmitError(result.error || 'Failed to send message. Please try again.');
        console.error('Submission error:', result);
      }
    } catch (error) {
      console.error('Network or other error:', error);
      setSubmitError('An unexpected error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ThreePartText heading="CONTACT US" />
        <div className="flex flex-col md:flex-row gap-10 items-stretch">
          {/* Map Section */}
          <div className="bg-gray-50 rounded-lg overflow-hidden shadow-lg md:w-1/2 flex flex-col min-h-[600px]">
            <div className="p-6 flex-1 flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Visit Us
              </h2>
              <div className="flex-1 bg-gray-200 rounded-lg overflow-hidden mb-6 min-h-[300px]">
                {/* Google Maps embed with marker */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0839010416585!2d72.77335667505156!3d21.14905908363629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d15c8358c2f%3A0xb2498bd24897cee3!2sPhehchan%20Brand%20Solutions!5e0!3m2!1sen!2sin!4v1747114030056!5m2!1sen!2sin"
                  width="580"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="space-y-3 mt-auto">
                <p className="flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#0f304f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  Phehchan Brand Solutions, 511, 5th Floor, SNS Platina, nr.
                  Someshwara Enclave, Someshwara Enclave, Vesu, Surat, Gujarat
                  395007
                </p>
                <p className="flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#0f304f]"
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
                  <a
                    href="mailto:contact@phehchan.com"
                    className="hover:underline"
                  >
                    contact@phehchan.com
                  </a>
                </p>
                <p className="flex items-center text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2 text-[#0f304f]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <a href="tel:+918980007005" className="hover:underline">
                    +91 8980007005
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg md:w-1/2 min-h-[600px]">
            <div className="p-6 h-full flex flex-col">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>

              {submitSuccess && ( // Simplified conditional rendering
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-50 p-4 rounded-md mb-6"
                >
                  <p className="text-green-800">
                    Thank you for your message! We'll get back to you soon.
                  </p>
                </motion.div>
              )}
              {submitError && ( // Display error message
                <div className="bg-red-50 p-4 rounded-md mb-6">
                  <p className="text-red-800">{submitError}</p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="space-y-6 flex-1 flex flex-col"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0f304f] focus:border-[#0f304f] sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0f304f] focus:border-[#0f304f] sm:text-sm"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0f304f] focus:border-[#0f304f] sm:text-sm"
                  />
                </div>

                <div className="flex-1 flex flex-col">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#0f304f] focus:border-[#0f304f] sm:text-sm flex-1"
                  ></textarea>
                </div>

                <div className="mt-auto">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#0f304f] hover:bg-[#1778d4] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0f304f] disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;