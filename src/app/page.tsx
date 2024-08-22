import Image from "next/image";
import CarouselBannerWrapper from "./components/Carousel";
import HeroSection from "./components/HeroSection";
import Expertise from "./components/Expertise";
import Partners from "./components/Partners";

export default function Home() {
  return (
    <>
      <CarouselBannerWrapper />
      <HeroSection />
      <Expertise />
      <Partners />
    </>
  );
}
