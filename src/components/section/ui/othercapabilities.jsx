"use client";

import React from 'react';
import Link from 'next/link';

const OtherCapabilities = () => {
  return (
    <div className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <h2 className="text-4xl font-bold text-center mb-4">
          Other Capabilities
        </h2>

        <p className="text-center text-lg mb-12">
          Let us help you with specialized legal services
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Tech Column */}
          <Link href="/Tech" className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold">Tech</h3>
                </div>

                <p className="text-gray-600 mb-6">
                  Solutions for tech and digital growth
                </p>

                <div className="space-y-3">
                  {/* Tech Services */}
                  <div className="flex items-start cursor-pointer hover:text-[#0f304f] transition-colors">
                    <span className="text-[#0f304f] mr-2">•</span>
                    <span className="text-gray-700">Web Development</span>
                  </div>

                  <div className="flex items-start cursor-pointer hover:text-[#0f304f] transition-colors">
                    <span className="text-[#0f304f] mr-2">•</span>
                    <span className="text-gray-700">App Development</span>
                  </div>

                  <div className="flex items-start cursor-pointer hover:text-[#0f304f] transition-colors">
                    <span className="text-[#0f304f] mr-2">•</span>
                    <span className="text-gray-700">CMS Solutions</span>
                  </div>

                  <div className="flex items-start cursor-pointer hover:text-[#0f304f] transition-colors">
                    <span className="text-[#0f304f] mr-2">•</span>
                    <span className="text-gray-700">Project 52</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Ads Column */}
          <Link href="/marketing" className="block">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <h3 className="text-2xl font-bold">Marketing</h3>
                </div>

                <p className="text-gray-600 mb-6">Helping brands grow</p>

                <div className="space-y-3">
                  {/* Ads Services */}
                  <div className="flex items-start cursor-pointer hover:text-[#0f304f] transition-colors">
                    <span className="text-[#0f304f] mr-2">•</span>
                    <span className="text-gray-700">
                      Strategic Marketing Leadership
                    </span>
                  </div>

                  <div className="flex items-start cursor-pointer hover:text-[#0f304f] transition-colors">
                    <span className="text-[#0f304f] mr-2">•</span>
                    <span className="text-gray-700">
                      Creative Direction & Brand Communication
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OtherCapabilities;