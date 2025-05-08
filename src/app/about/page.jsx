"use client";
import dynamic from 'next/dynamic';
import FullWidthBanner from "@/components/section/common/fullwidthimg";

// Dynamically import components that might use window
const AboutSection = dynamic(() => import("@/components/section/aboutsection"), { ssr: false });
const FAQWithImage = dynamic(() => import("@/components/section/common/faqwithimg"), { ssr: false });

import React from "react";
import TextFlow from '@/components/section/ui/textflow';

const AboutPage = () => {
  return (
    <>
    
      <AboutSection />

      {/* <TextFlow /> */}
      <FAQWithImage
        title="Our process for developing customer centric growth strategies"
        items={[
          {
            id: 1,
            title: "1. Think: Strategy First",
            content:
              "We begin at the drawing board — deeply understanding your business, market, audience, and risks. This stage is all about research, clarity, and defining your brand’s unique identity with a long-term view.",
          },
          {
            id: 2,
            title: "2. Build: Smart Brand Systems",
            content:"From messaging and design systems to campaign frameworks, we build everything your brand needs — backed by legal reviews and structured to support safe, scalable marketing.",
          },
          {
            id: 3,
            title: "3. Execute: Flawless, Legally Sound Delivery",
            content: "We launch high-impact campaigns across digital, print, and influencer platforms — each piece legally vetted, brand-aligned, and performance-ready.",
          },
          {
            id: 4,
            title: " 4. Optimize: Grow With Confidence",
            content: "Through our Fractional CMO model, we monitor, refine, and lead your ongoing marketing efforts — ensuring your brand evolves responsibly, effectively, and without legal missteps.",
          },
          // Additional items...
        ]}
        imageSrc="/imgphehchan.png"
        imageAlt="Growth strategy process"
      />
      
    </>
  );
};

export default AboutPage;
