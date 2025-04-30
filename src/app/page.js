import FullWidthBanner from "@/components/common/fullwidthimg";
import HalfImageHalfText from "@/components/common/halfimghalftext";
import HalfImageHalfTextLeft from "@/components/common/halfimghalftext_left";
import FlowingMenu from "@/components/ui/flowingmenu";
import InfiniteMenu from "@/components/ui/InfiniteMenu";
import { demoItems, items } from "@/lib/constants";



export default function Home() {
  return (
    <>
    <FullWidthBanner />
    <HalfImageHalfText />
<div style={{ height: '700px', position: 'relative' }}>
  <InfiniteMenu items={items}/>
</div>
 <HalfImageHalfTextLeft />
 <div style={{ height: '700px', position: 'relative' }}>
  <FlowingMenu items={demoItems} />
</div>
    </>
  );
}
