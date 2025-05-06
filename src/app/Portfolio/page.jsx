import AboutSection from "@/components/section/aboutsection";
import FAQWithImage from "@/components/section/common/faqwithimg";
import { PhotoServiceCard } from "@/components/section/common/photoservicecard";
import ThreePartSection from "@/components/section/common/threepartsection";
import ThreePartSection2 from "@/components/section/common/threepartsection2";
import PortfolioTabs from "@/components/section/portfoliotabs";
import LogoSlider from "@/components/section/ui/rotatingimg";
import TextFlow from "@/components/section/ui/textflow";
import FullWidthBanner from "@/components/section/common/fullwidthimg";

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
