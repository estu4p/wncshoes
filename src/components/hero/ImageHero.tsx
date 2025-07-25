import Image from "next/image";
import React from "react";

const ImageHero = () => {
  return (
    <div className="flex items-center justify-center ">
      {/* <div className="absolute -top-[15%] z-0"> */}
      <div className="absolute -top-[17%] sm:-top-[15%] z-0">
        <div className="bg-secondary rounded-2xl -rotate-90 w-64 flex justify-center h-24 py-1 absolute -left-[110px] bottom-28 -z-10">
          <p className="text-white font-bold tracking-wide">SINCE 2023</p>
        </div>
        <Image
          src="/images/img_hero.png"
          alt="cuci sepatu jogja"
          width={371}
          height={448}
          className="w-[311px] md:w-[371px] h-[408px] md:h-[448px] rounded-4xl object-cover"
        />
      </div>
    </div>
  );
};

export default ImageHero;
