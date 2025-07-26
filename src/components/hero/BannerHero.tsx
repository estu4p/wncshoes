import Image from "next/image";
import React from "react";
import Button from "../Button";

const BannerHero = () => {
  return (
    <div className="w-[127px] sm:w-fit bg-white rounded-2xl flex flex-col p-1 items-center justify-center z-50">
      <Image
        src="/images/img_hero.png"
        alt="cuci sepatu jogja"
        width={150}
        height={150}
        // className="rounded-4xl w-[177px] h-[180px] object-cover"
        className="rounded-2xl sm:rounded-4xl w-[117px] sm:w-[177px] h-[120px] sm:h-[180px] object-cover"
      />
      {/* <p className="font-bold leading-tight mt-3"> */}
      <p className="font-bold leading-tight mt-1 sm:mt-3 text-[12px] sm:text-base">
        Special Kids Shoes <br />{" "}
        <span className="text-gray font-medium">For your kids</span>
      </p>
      {/* <Button className="py-3 px-9 rounded-3xl mt-4"> */}
      <Button className="py-0.5 sm:py-3 px-0 sm:px-9 rounded-3xl mt-1 sm:mt-4">
        Order Now
      </Button>
    </div>
  );
};

export default BannerHero;
