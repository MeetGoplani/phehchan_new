"use client";
import dynamic from "next/dynamic";

import ThreePartText from "@/components/section/common/3parttext";
const FullWidthBanner = dynamic(
  () => import("@/components/section/common/fullwidthimg"),
  { ssr: false }
);

import React from "react";

const TechPage = () => {
  return (
    <>
      <FullWidthBanner
        customTitle=""
        customSubtitle="Tech"
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
        subheading="Web Development"
        content="Build your digital presence with web development tailored to meet your personalized business needs. Our team specializes in creating responsive, fast-loading, and user-friendly websites to attract an audience. Whether you're aiming for an informative site or a complex e-commerce platform, we ensure your web presence is powerful and persuasive."
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
        subheading="App Development"
        content="Turn your ideas into reality with our exceptional app development services. From iOS to Android, our applications are designed to enhance user engagement and improve operational efficiency. We focus on intuitive interfaces and seamless user experiences, ensuring your app not only functions smoothly but stands out in a competitive marketplace."
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
        subheading="CMS Solutions"
        content="Take control of your content with our robust CMS solutions. We customise platforms that make managing and updating your website's content simple and efficient. From WordPress to advanced enterprise systems, our CMS services ensure content is always crisp, relevant, and aligned with your marketing goals."
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

export default TechPage;
