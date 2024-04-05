import Screen from "@/components/layout/Screen";
import EmblaCarousel from "@/components/carousel";
import { EmblaOptionsType } from "embla-carousel";

import FirstSection from "@/components/page/firstSection";
import SecondSection from "@/components/page/secondSection";

const OPTIONS: EmblaOptionsType = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const Home = () => {
  return (
    <>
      <FirstSection />
      <SecondSection />
      {/* <Screen color="black" className="h-screen">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </Screen> */}
    </>
  );
};

export default Home;
