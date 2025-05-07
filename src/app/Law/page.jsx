"use client"
import dynamic from 'next/dynamic';
import React from "react";

// Dynamically import components that might use window
const ThreePartText = dynamic(() => import("@/components/section/common/3parttext"), { ssr: false });
const FullWidthBanner = dynamic(() => import("@/components/section/common/fullwidthimg"), { ssr: false });

const LawPage = () => {
  return (
    <>
      <FullWidthBanner 
        customTitle=""
        customSubtitle="Compliant Campaings"
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
        subheading="Pre-publication Advertising Advice and Due Diligence"
        content="With a vast and multi-dimensional experience in the industry, we know all the right ways to get your advertising communication right the first time Our first hand experience in working closely with ASCI provides us with unique expertise and insights to address your ASCI related concerns We provide advertising advice to advertisers and advertising agencies to identify weak spots in their proposed advertising communicationFor confidential projects it is crucial that advertiser receive this advice without any fear of breach of confidentiality and in super prompt timeline We provide recommendations on how the advertisement may be worded so as to make the communication 'complaint proof' When it comes to advertising communication, you can rely on Tap-a-Gain for a thorough due diligence Be proactive and ensure that your ads are complying with the law of the land, advertising regulations and complete the due diligence for advertising compliance"
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
        content="Received a complaint against your advertisement? Fret not, we are here to deal with it
If you face with ASCI investigation, we provide you with short term as well as long term strategy to manage ASCI challenge
We help advertisers defend their advertising communication, ensure your side is represented well and your responses are comprehensive
We provide you with tactical ways to close out the complaints
In case of adverse ruling, we work with your team to arrive at a solution that is most pragmatic and effective"
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
        content="Competitor getting away with over the top claims ? Challenge them - delegate that sweet task to us!
In advertising, you can not let competitor get ahead based on false claims and misleading advertisements
Product superiority claims are super important so also important is the level playing field.
We help advertisers develop a competitor challenge strategy
We would be happy to assist you to build a strong case against competitor advertisements"
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
