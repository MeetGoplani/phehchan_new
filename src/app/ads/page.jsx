"use client"
import FullWidthText from '@/components/section/common/fullwidthtext';
import Services from '@/components/section/common/services';
import TextCarousel from '@/components/section/common/textcarousel';
import dynamic from 'next/dynamic';
import React from "react";

// Dynamically import components that might use window
const ThreePartText = dynamic(() => import("@/components/section/common/3parttext"), { ssr: false });
const FullWidthBanner = dynamic(() => import("@/components/section/common/fullwidthimg"), { ssr: false });

const rightContentData = [
  {
    title: "Brand Audit & Market Positioning",
    points: [
      "Internal brand equity assessment",
      "Competitive landscape analysis (SWOT, category mapping)",
      "Brand DNA document: purpose, values, differentiators",
    ],
  },
  {
    title: "Target Audience Development",
    points: [
      "Customer persona creation (demographic, psychographic, behavioral)",
      "Jobs-to-be-Done (JTBD) framework for value articulation",
    ],
  },
  {
    title: "Go-To-Market (GTM) Strategy",
    points: [
      "Product/service launch plans (pre-launch, launch, post-launch)",
      "Channel prioritization (owned, earned, paid, partnership)",
      "Pricing & packaging consultation",
    ],
  },
  {
    title: "Strategic Planning",
    points: [
      "12-month marketing blueprint",
      "Quarterly campaign and goal planning (OKRs/KPIs)`",
      "Marketing + Sales alignment workshops",
    ],
  },
];

const rightContentData2 = [
  {
    title: "Brand Identity & Visual Systems",
    points: [
      "Logo and design system audits or development",
      "Typography, iconography, and asset library creation",
      "Brand voice & tone playbook",
    ],
  },
  {
    title: "Content Architecture & Creative Strategy",
    points: [
      "Master content pillars aligned with brand positioning",
      "Annual editorial calendar",
      "Messaging matrices for each persona",
    ],
  },
  {
    title: "Campaign Development & Oversight",
    points: [
      "Conceptualization of seasonal campaigns (festivals, launches, CSR)",
      "Copywriting and scripting for ads, promos, AVs",
      "Art direction for shoots, video, podcast, and animations",
    ],
  },
  {
    title: "Production Leadership",
    points: [
      "Vendor/agency briefing & coordination",
      "Quality control of final creative output",

    ],
  },
];


const AdsPage = () => {
  return (
    <>
      <ThreePartText
        heading="MARKETING EXPERTISE"
        subheading=" Strategic Marketing Leadership"
        content="Build and lead a scalable, data-driven marketing function tailored to the client’s growth stage.

Most growing companies struggle to transition from founder-led or reactive marketing to a structured, strategic marketing function. This service is designed to bridge that gap. Whether you're an early-stage brand trying to find market fit or an established business aiming to scale profitably, we act as your extended leadership arm—helping you build a marketing engine that is proactive, measurable, and adaptable.

Our goal is not just to run campaigns or design decks. It's to architect a long-term marketing system grounded in data, insight, and clear business objectives. We lay the strategic foundation (positioning, audience understanding, GTM planning), embed performance rhythms (OKRs, blueprints, campaign cycles), and align cross-functional teams (sales, product, and leadership) so marketing becomes a true growth partner—not just a cost center.

In short, we build the thinking, systems, and processes that your brand can scale with—not just survive with.
"
        rightContent={rightContentData}
      />

      <ThreePartText
        heading=""
        subheading="Creative Direction & Brand Communication"
        content="Creative Direction & Brand Communication

Goal: Elevate brand storytelling across all media formats and customer touchpoints.

In a crowded market, people don’t just buy products—they buy brands they feel connected to. Our creative direction offering is built to make your brand visually magnetic, emotionally resonant, and strategically consistent—across every single touchpoint.

The goal here isn’t just to make things “look good” or “go viral.” It’s to craft a coherent, compelling brand experience—from the first scroll on social media to the last touch in the customer journey. We shape how your brand sounds, looks, and feels in the world—whether it’s a campaign video, a podcast intro, your packaging design, or your Instagram grid.

We do this by creating and overseeing the full content ecosystem: identity systems, content strategy, messaging frameworks, campaign ideas, and production quality. This ensures your storytelling isn't siloed or superficial—it’s structured, strategic, and scalable.

When brand expression is handled with this level of intent, it doesn’t just build visibility—it builds trust, loyalty, and cultural relevance."
        rightContent={rightContentData2}
      />
    </>
  );
};

export default AdsPage;
