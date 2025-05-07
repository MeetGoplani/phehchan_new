"use client";
import dynamic from 'next/dynamic';
import FullWidthBanner from "@/components/section/common/fullwidthimg";

// Dynamically import components that might use window
const AboutSection = dynamic(() => import("@/components/section/aboutsection"), { ssr: false });
const FAQWithImage = dynamic(() => import("@/components/section/common/faqwithimg"), { ssr: false });

import React from "react";

const AboutPage = () => {
  return (
    <>
      <FullWidthBanner
        customTitle=""
        customSubtitle="About Phehchan"
      />
      <AboutSection />

      {/* <TextFlow /> */}
      <FAQWithImage
        title="Our process for developing customer centric growth strategies"
        items={[
          {
            id: 1,
            title: "Step One: THINK",
            content: "We spend majority of our time on the drawing board.",
          },
          {
            id: 2,
            title: "Step 2: CREATE",
            content: "Make it simple, but significant.",
          },
          {
            id: 3,
            title: "Step 3:PERFORM",
            content: "Success comes from standing out, not fitting in.",
          },
          {
            id: 4,
            title: "Step 4: OPTIMIZE",
            content: "If it's good, make it better.",
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
