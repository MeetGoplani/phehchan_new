"use client";
import TextCarousel from "@/components/section/common/textcarousel";
import dynamic from "next/dynamic";
import React from "react";

// Dynamically import components that might use window
const ThreePartText = dynamic(
  () => import("@/components/section/common/3parttext"),
  { ssr: false }
);
const FullWidthBanner = dynamic(
  () => import("@/components/section/common/fullwidthimg"),
  { ssr: false }
);

const LawPage = () => {
  return (
    <>
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

      <ThreePartText heading="COMPLIANT CAMPAIGN EXPERTISE" />
      <ThreePartText
        heading=""
        subheading="Pre-Publication Advertising Advice and Due Diligence"
        content="At Phehchan Brand Solutions, we don’t just help you say it right — we help you get it right the first time.

With deep, hands-on experience in the advertising world — and having worked closely with the Advertising Standards Council of India (ASCI) — we bring rare insight and sharp judgment to ensure your campaigns are not just creative, but compliant.

We work with advertisers and agencies to spot the blind spots before they become liabilities. For sensitive or high-stakes projects, we offer fast, confidential advice that you can trust — no leaks, no delays.

Our mission is simple: to help you craft communication that’s bold, effective, and bulletproof. From fine-tuning your language to reworking your messaging, we’ll guide you on how to make your ads ‘complaint-proof’ — without diluting your brand’s voice.

With Phehchan Brand Solutions, advertising due diligence isn’t a box to tick — it’s a strategic edge. Be proactive. Protect your brand. And ensure your message always lands exactly the way it should — clear, compelling, and compliant."
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
        subheading="Advertisement Complaint Management"
        content="Received a complaint against your advertisement? We’re here to help you address it effectively.

If you're facing an ASCI investigation, Phehchan Brand Solutions supports you with both short-term actions and long-term strategies to manage the situation. We assist advertisers in defending their communication, ensuring that your position is well-represented and your responses are thorough and aligned with ASCI procedures.

We help you develop tactical approaches to resolve complaints efficiently. In cases where the ruling is not in your favour, we work with your team to arrive at a solution that is both pragmatic and aligned with your brand objectives.

Our aim is to protect your brand’s integrity while helping you navigate regulatory challenges with clarity and confidence."
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
        subheading="Competitor Challenges"
        content="⁠Competitor getting away with over-the-top claims? Challenge them — and let us take care of it.

In advertising, false or misleading claims can distort the market and give unfair advantage. Product superiority matters — and so does maintaining a level playing field.

At Phehchan Brand Solutions, we work with advertisers to develop and execute effective competitor challenge strategies. From assessing the claim to framing a strong, well-structured challenge, we guide you through the process with clarity and confidence.

We’re here to ensure that advertising remains fair, transparent, and competitive — just the way it should be."
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

export default LawPage;
