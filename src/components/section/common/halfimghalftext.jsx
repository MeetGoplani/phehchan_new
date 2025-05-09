"use client";

import React from "react";
import Link from "next/link";

const HalfImageHalfText = ({
  subtitle = "A LAWYER",
  title = "Meet Apurva",
  name = "Brands & communicating expert",
  description = "With over twelve years in the creative industry as a professional photographer, Apurva Mehra has cultivated a sharp eye for aesthetics, storytelling, and innovation. His journey later expanded into the world of law, where he graduated with an LLB in Business Administration from Auro University. This unique combination of creative vision and strategic, detail-driven thinking sets him apart as a leader.Fueling his passion for branding and marketing, Apurva further honed his skills at the Advertising Standards Council of India (ASCI), where he deepened his understanding of brand communication ethics and standards.Apurva merges creativity, legal expertise, and strategic brand building to craft identities that are authentic, impactful, and enduring. His leadership is rooted in a belief that real brands aren’t built overnight; they are shaped by passion, clarity, and resilience over time.",
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
  secondaryButtonLink = "https://www.linkedin.com/company/phehchan-brand-solutions/",
}) => {
  const isImageRight = imagePosition === "right";

  return (
    <div className="relative w-full overflow-hidden py-12 md:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div
            className={`w-full md:w-1/2 flex flex-col justify-center ${
              isImageRight ? "pr-0 md:pr-12" : "pl-0 md:pl-12 order-2"
            }`}
            style={{ backgroundColor }}
          >
            <div className="px-6 md:px-0 max-w-lg">
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

          {/* Image Section */}
          <div className={`w-full md:w-1/2 ${isImageRight ? "" : "order-1"}`}>
            <div
              className="bg-gray-100 rounded-lg overflow-hidden"
              style={{ filter: "drop-shadow(0 20px 13px rgba(0, 0, 0, 0.8))" }}
            >
              <img
                src={imageUrl}
                alt={imageAlt}
                className="w-full h-full object-cover"
                style={{
                  boxShadow: "0 20px 25px rgba(0, 0, 0, 0.8)",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HalfImageHalfText;
