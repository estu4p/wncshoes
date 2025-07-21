"use client";
import BannerHero from "@/components/hero/BannerHero";
import ImageHero from "@/components/hero/ImageHero";
import { CgArrowLeft, CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";

const Hero = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    const timerBanner = setTimeout(() => {
      setShowBanner(false);
      console.log("hi");
    }, 4000);
    return () => clearTimeout(timerBanner);
  }, []);

  return (
    <section
      id="hero"
      className="hero-background h-fit flex flex-col text-foreground relative"
    >
      {/* <div className="absolute lg:right-16 top-32 z-10 md:right-8"> */}
      {/* <div className="hidden sm:block absolute lg:right-16 top-20 md:top-32 z-10 right-0 sm:right-8 ">
        <BannerHero />
      </div> */}
      {/* banner */}
      <div
        className={`absolute lg:right-16 top-24 md:top-32 z-50 sm:right-8 transition-all ease-out duration-300 ${
          showBanner ? "right-8" : "-right-32"
        }`}
      >
        <button
          className="sm:hidden px-2 py-2 rounded-full bg-secondary text-white absolute -right-5 -top-5 z-50"
          onClick={() => setShowBanner(false)}
        >
          <CgClose />
        </button>
        <BannerHero />
      </div>
      {!showBanner && (
        <button
          className={`absolute sm:hidden px-2 py-2 rounded-l-md bg-secondary text-white transition-all ease-out duration-500 top-24 z-50 ${
            showBanner ? "-right-2" : "right-0"
          }`}
          onClick={() => setShowBanner(true)}
        >
          <CgArrowLeft className="text-xl" />
        </button>
      )}
      {/* end baner */}
      {/* top */}
      {/* <div className="flex items-center justify-center h-[531px] -mt-4 sm:-mt-2"> */}
      <div className="flex items-center justify-start md:justify-center h-[531px] -mt-4 sm:-mt-2 ml-8 md:ml-0">
        {/* banner */}
        <div className="flex flex-col md:flex-row items-start ml-6 md:justify-center gap-14 md:-ml-44 -z-10">
          <p className="leading-tight font-bold md:mt-5">
            <span className="text-gray">
              Chaos on <br /> the Ground
            </span>{" "}
            but
            <br />
            Spotless all Around
          </p>
          <h2 className="text-9xl font-bebas max-md:-mt-6 leading-[0.75]">
            WASH
            <br />& CARE
          </h2>
        </div>
      </div>
      {/* bottom */}
      <div className="relative w-full md:-mt-8 mt-0">
        <ImageHero />
        {/* <h2 className="font-bebas text-center text-[384px] whitespace-nowrap overflow-hidden tracking-[-18px] -z-20"> */}
        <h2 className="font-bebas text-center text-[344px] sm:text-[384px] whitespace-nowrap overflow-hidden tracking-[-18px] -z-20 mt-20 sm:mt-0">
          APPARELEBELL
        </h2>
      </div>
    </section>
  );
};

export default Hero;
