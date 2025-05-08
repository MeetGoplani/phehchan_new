"use client"
import Services from '@/components/section/common/services';
import TextCarousel from '@/components/section/common/textcarousel';
import dynamic from 'next/dynamic';
import React from "react";

// Dynamically import components that might use window
const ThreePartText = dynamic(() => import("@/components/section/common/3parttext"), { ssr: false });
const FullWidthBanner = dynamic(() => import("@/components/section/common/fullwidthimg"), { ssr: false });

const AdsPage = () => {
  return (
    <>
      <FullWidthBanner customTitle="" customSubtitle="Marketing" />
      {/* <div className="lg:pb-8 pb-6 gap-4 flex flex-col lg:max-w-3xl mx-auto lg:text-center justify-center items-center "></div>
      <FullWidthText
        companyName="Our Expertise"
        companyDescription=""
        additionalText="At Phehchan, we bring over 30 years of experience and a deep understanding of advertising regulations in India We guide our clients to address advertising complaints and ASCI complaint redressalWe are up-to-date with the latest industry trends, ensuring that our clients receive the most relevant and effective strategies."
        backgroundColor="#ffffff"
        textColor="#000000"
      />
      <div className="grid grid-cols-1 lg:max-w-3xl mx-auto pb-6 gap-6 ">
        {techSolutions.map((item, index) => (
          <PhotoServiceCard
            key={index}
            service={item}
            isOdd={index % 2 !== 0}
          />
        ))}
      </div> */}
      <ThreePartText
        heading="OUR EXPERTISE"
        subheading="Strategic Marketing Leadership"
        content="Brand Audit & Market Positioning"
        rightContent=""
        waitlistLink={{
          text: "Internal brand equity assessment ",
          subtext: "",
          url: "#waitlist",
        }}
        surveyLink={{
          text: "Competitive landscape analysis (SWOT, category mapping) Brand DNA document: purpose, values, differentiators",
          subtext: "",
          url: "#survey",
        }}
      />
      <ThreePartText
        heading=""
        subheading="Offline Marketing Activities"
        content="Connect with your customers through impactful direct marketing, promotional events, and print advertising that complement your digital strategies."
        rightContent=""
        waitlistLink={{
          text: "Join the Waitlist",
          subtext: "Reserve your early access.",
          url: "#waitlist",
        }}
        surveyLink={{
          text: "Take the Survey",
          subtext: "Contribute to the vision.",
          url: "#survey",
        }}
      />
      <ThreePartText
        heading=""
        subheading="Ideation & Execution"
        content="Turn creative ideas into successful campaigns with a seamless execution process that ensures consistency and quality across all channels."
        rightContent=""
        // waitlistLink={{
        //   text: "Join the Waitlist",
        //   subtext: "Reserve your early access.",
        //   url: "#waitlist",
        // }}
        // surveyLink={{
        //   text: "Take the Survey",
        //   subtext: "Contribute to the vision.",
        //   url: "#survey",
        // }}
      />
      <ThreePartText
        heading=""
        subheading="SEO"
        content="Improve your website's visibility on search engines through optimized content and proven SEO techniques that drive organic growth."
        rightContent=""
        // waitlistLink={{
        //   text: "Join the Waitlist",
        //   subtext: "Reserve your early access.",
        //   url: "#waitlist",
        // }}
        // surveyLink={{
        //   text: "Take the Survey",
        //   subtext: "Contribute to the vision.",
        //   url: "#survey",
        // }}
      />
      <ThreePartText
        heading=""
        subheading="Media Buying"
        content="Navigate the complexities of media planning and buying with expertise that ensures your ads are seen by the right people at the right time."
        rightContent=""
        // waitlistLink={{
        //   text: "Join the Waitlist",
        //   subtext: "Reserve your early access.",
        //   url: "#waitlist",
        // }}
        // surveyLink={{
        //   text: "Take the Survey",
        //   subtext: "Contribute to the vision.",
        //   url: "#survey",
        // }}
      />
      <ThreePartText
        heading=""
        subheading="Branding"
        content="Build a distinctive brand identity that captures your business's essence and differentiates you in the marketplace."
        rightContent=""
        // waitlistLink={{
        //   text: "Join the Waitlist",
        //   subtext: "Reserve your early access.",
        //   url: "#waitlist",
        // }}
        // surveyLink={{
        //   text: "Take the Survey",
        //   subtext: "Contribute to the vision.",
        //   url: "#survey",
        // }}
      />
      <Services />
    </>
  );
};

export default AdsPage;
