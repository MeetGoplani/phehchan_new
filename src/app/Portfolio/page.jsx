"use client"
import dynamic from "next/dynamic";

import PortfolioTabs from "@/components/section/portfoliotabs";

const FullWidthBanner = dynamic(
  () => import("@/components/section/common/fullwidthimg"),
  { ssr: false }
);

import { techSolutions } from "@/lib/constants";
import React from "react";
import ThreePartText from "@/components/section/common/3parttext";

const PortfolioPage = () => {
  return (
    <>
      <ThreePartText heading="PORTFOLIO" />
      <PortfolioTabs />
    </>
  );
};

export default PortfolioPage;
