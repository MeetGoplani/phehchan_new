import AboutSection from "@/components/section/aboutsection";
import ThreePartText from "@/components/section/common/3parttext";
import FAQWithImage from "@/components/section/common/faqwithimg";
import FullWidthText from "@/components/section/common/fullwidthtext";
import { PhotoServiceCard } from "@/components/section/common/photoservicecard";
import ThreePartSection from "@/components/section/common/threepartsection";
import ThreePartSection2 from "@/components/section/common/threepartsection2";
import LogoSlider from "@/components/section/ui/rotatingimg";
import TextFlow from "@/components/section/ui/textflow";
import { techSolutions } from "@/lib/constants";
import FullWidthBanner from "@/components/section/common/fullwidthimg";

import React from "react";

const AdsPage = () => {
  return (
    <>
      <FullWidthBanner
        customTitle=""
        customSubtitle="Marketing"
      />
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
        subheading="Strategic Digital Marketing for Growth and Engagement"
        content="Maximize your brand’s impact with a comprehensive digital marketing approach that combines targeted social media strategies, bespoke campaigns, and performance-driven execution. Build a strong online presence and connect directly with your audience through content that educates, entertains, and inspires loyalty. Leverage digital platforms to drive traffic, generate leads, and increase conversions—while continuously optimizing for results using advanced tracking and analytics. This integrated strategy ensures increased visibility, stronger community engagement, and a measurable return on investment."
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
        subheading="Offline Marketing Activities"
        content="Connect with your customers through impactful direct marketing, promotional events, and print advertising that complement your digital strategies."
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
        content="Improve your website’s visibility on search engines through optimized content and proven SEO techniques that drive organic growth."
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
        content="Build a distinctive brand identity that captures your business’s essence and differentiates you in the marketplace."
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
    </>
  );
};

export default AdsPage;
