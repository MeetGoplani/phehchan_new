"use client"
import dynamic from "next/dynamic";
import React, { Suspense } from "react"; // Add Suspense import

import PortfolioTabs from "@/components/section/portfoliotabs";

const FullWidthBanner = dynamic(
  () => import("@/components/section/common/fullwidthimg"),
  { ssr: false }
);

import { techSolutions } from "@/lib/constants";
import ThreePartText from "@/components/section/common/3parttext";

const PortfolioPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThreePartText heading="PORTFOLIO" />
      <PortfolioTabs />
    </Suspense>
  );
};

export default PortfolioPage;
