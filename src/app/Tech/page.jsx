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
      <ThreePartText heading="TECH EXPERTISE" />

      <ThreePartText
        heading=""
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

      <ThreePartText
        heading=""
        subheading="Project 52"
        content="Need to streamline a process? There’s an app for that. No fuss, no hidden fees, just an instant setup. Every app simplifies your tasks and equips your team with the right tools. Consider the impact when everyone has seamless access to tools that integrate effortlessly with each other."
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
