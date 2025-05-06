import FullWidthBanner from "@/components/section/common/fullwidthimg";
import FullWidthText from "@/components/section/common/fullwidthtext";
import HalfImageHalfText from "@/components/section/common/halfimghalftext";
import HalfImageHalfTextLeft from "@/components/section/common/halfimghalftext2";
import FlowingMenu from "@/components/section/ui/flowingmenu";
import FlowingMenu2 from "@/components/section/ui/flowingmenu2";
import FlowingMenu3 from "@/components/section/ui/flowingmenu3";
import Project52Button from "@/components/section/ui/Project52Button";
import InfiniteMenu from "@/components/section/ui/InfiniteMenu";
import OtherCapabilities from "@/components/section/ui/othercapabilities";
// import LogoSlider from "@/components/section/ui/rotatingimg";
import { demoItems, items } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <FullWidthBanner />
      <FullWidthText
        companyName="PHEHCHAN"
        companyDescription="is a legal services platform helping brands make their content legally strong."
        additionalText="We provide comprehensive legal solutions tailored to your specific needs."
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
