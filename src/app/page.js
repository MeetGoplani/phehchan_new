"use client";
import dynamic from 'next/dynamic';

// Dynamically import components that might use window
const FullWidthBanner = dynamic(() => import("@/components/section/common/fullwidthimg"), { ssr: false });
const FullWidthText = dynamic(() => import("@/components/section/common/fullwidthtext"), { ssr: false });
const HalfImageHalfText = dynamic(() => import("@/components/section/common/halfimghalftext"), { ssr: false });
const FlowingMenu = dynamic(() => import("@/components/section/ui/flowingmenu"), { ssr: false });
const FlowingMenu3 = dynamic(() => import("@/components/section/ui/flowingmenu3"), { ssr: false });
const InfiniteMenu = dynamic(() => import("@/components/section/ui/InfiniteMenu"), { ssr: false });
const OtherCapabilities = dynamic(() => import("@/components/section/ui/othercapabilities"), { ssr: false });

import {items } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <FullWidthBanner customTitle='WHERE STRATEGY MEETS STORYTELLING' customSubtitle='— AND COMPLIANCE BUILDS TRUST.'/>
      <FullWidthText
        companyName="Compliance "
        companyDescription="Isn’t Optional—It’s Your Edge."
        additionalText="We help your brand shine for all the right reasons. At PBS, we make sure your campaigns play by the rules, while our Fractional CMO model gives you the strategy and support to grow with confidence."
        backgroundColor="#ffffff"
        textColor="#000000" 
      />
      
      <div style={{ height: '700px', position: 'relative' }}>
        <InfiniteMenu items={items}/>
      </div>
      <FlowingMenu />
      <HalfImageHalfText />
      <FlowingMenu3 />
      <OtherCapabilities />
    </>
  );
}
