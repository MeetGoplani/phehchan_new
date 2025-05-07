"use client"
import dynamic from "next/dynamic";

import PortfolioTabs from "@/components/section/portfoliotabs";

const FullWidthBanner = dynamic(
  () => import("@/components/section/common/fullwidthimg"),
  { ssr: false }
);

import { techSolutions } from "@/lib/constants";
import React from "react";

const PortfolioPage = () => {
  return (
    <>
      <FullWidthBanner
        customTitle=""
        customSubtitle="Our Portfolio"
      />
      <PortfolioTabs />
    </>
  );
};

export default PortfolioPage;
