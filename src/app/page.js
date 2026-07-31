import AvailableStudyRooms from "@/Components/home/AvailableStudyRooms";
import Banner from "@/Components/home/Banner";
import HowItWork from "@/Components/home/HowItWork";
import MarqueeNews from "@/Components/home/MarqueeNews";

import WhyStudyNook from "@/Components/home/WhyStudyNook";


export default function Home() {
  return (
  <div>
    <MarqueeNews/>
   <Banner/>
   <AvailableStudyRooms/>
   <WhyStudyNook/>
   <HowItWork/>
  </div>
  );
}
