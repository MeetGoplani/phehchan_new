"use client";
import dynamic from 'next/dynamic';
import FullWidthBanner from "@/components/section/common/fullwidthimg";

// Dynamically import components that might use window
const AboutSection = dynamic(() => import("@/components/section/aboutsection"), { ssr: false });
const FAQWithImage = dynamic(() => import("@/components/section/common/faqwithimg"), { ssr: false });

import React from "react";
import TwoByTwoText from '@/components/section/common/2by2text';


const AboutPage = () => {
   const sectionData = [
     {
       icon: "1.",
       title: "Marketing that withstands Scrutiny:",
       description:
         " At PBS, creative integrity and legal foresight go hand in hand. We don't just wait for campaign approvals, we anticipate compliance requirements from day one. Whether it's disclaimers, talent contracts, data usage permissions, or regulatory vetting, we bake legal safeguards into every stage of the campaign lifecycle, from ideation to post-launch.",
     },
     {
       icon: "2.",
       title: "Industry-Specific Expertise:",
       description:
         "Our deep experience in regulated sectors  including healthcare, wellness, finance, education, and consumer goods  allows us to operate at the intersection of innovation and governance. We help brands in high-trust industries scale confidently, with messaging that resonates with audiences while meeting all legal standards, including ASCI, FSSAI, DPCO, DPDP, and global data privacy laws like GDPR.",
     },
     {
       icon: ".3",
       title: "Fractional CMO Advantage:",
       description:
         " Through our Fractional CMO model, we provide leadership-level marketing strategy paired with on-ground execution  all anchored by legal clarity. This model is ideal for founders and CMOs looking to accelerate growth without compromising compliance. We're agile, strategic, and structured building marketing systems that are creative, contractually sound, and investor-friendly.",
     },
     {
       icon: ".4",
       title: "The Phehchan Promise:",
       description:
         "We don't just deliver campaigns, we deliver peace of mind. With PBS, you get more than storytelling; you get strategic clarity, brand protection, and executional excellence. We ensure every message you put into the world reflects your values, reaches the right audience, and stands the test of both public perception and legal review. That's the Phehchan Guarantee  creative that converts, with compliance built in.",
     },
   ];

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
            content:
              "From messaging and design systems to campaign frameworks, we build everything your brand needs to be backed by legal reviews and structured to support safe, scalable marketing.",
          },
          {
            id: 3,
            title: "3. Execute: Flawless, Legally Sound Delivery",
            content:
              "We launch high-impact campaigns across digital, print, and influencer platforms — each piece legally vetted, brand-aligned, and performance-ready.",
          },
          {
            id: 4,
            title: "4. Optimize: Grow With Confidence",
            content:
              "Through our Fractional CMO model, we monitor, refine, and lead your ongoing marketing efforts — ensuring your brand evolves responsibly, effectively, and without legal missteps.",
          },
          // Additional items...
        ]}
        imageSrc="/untitled-8.jpg"
        imageAlt="Growth strategy process"
      />

      <TwoByTwoText sections={sectionData} />
    </>
  );
};

export default AboutPage;
