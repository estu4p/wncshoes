import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Why_Choose_Us = () => {
  return (
    <section className="w-full mt-28 md:pb-10 px-6 md:px-8">
      <div className="relative">
        <div className="flex items-center md:w-[55%] md:ml-[60px]">
          {/* <h2 className="font-bebas text-secondary text-[300px] leading-none tracking-[-8px]"> */}
          <h2 className="font-bebas text-secondary text-[150px] md:text-[300px] leading-none tracking-[-8px]">
            WHY
          </h2>
          <div className="h-4 w-full bg-secondary"></div>
        </div>
        {/* <div className="text-right -mt-14 mr-7"> */}
        <div className="md:text-right -mt-5 md:-mt-14 md:mr-7 z-10">
          {/* <h3 className="font-bebas text-secondary text-[300px] leading-none tracking-[-12px]"> */}
          <h3 className="font-bebas text-secondary text-[150px] md:text-[300px] leading-[0.8] tracking-[-2px] md:leading-none md:tracking-[-12px]">
            CHOOSE <br className="md:hidden" /> US
          </h3>
        </div>
        <div className="absolute -right-3 top-64 md:bottom-0 md:left-0 h-fit w-[58%] md:w-[418px] -z-10">
          <div className="relative h-full w-full">
            <Image
              src="/images/img_hero.png"
              alt="cuci sepatu jogja"
              width={418}
              height={489}
              className="w-[218px] h-[329px] md:w-[418px] md:h-[489px] object-cover rounded-4xl"
            />
            <div className="md:h-[223px] w-fit bg-[#CBF1EA] absolute bottom-3 left-3 right-3 rounded-4xl p-6 md:p-7 flex items-end">
              <div className="">
                <h5 className="font-bebas text-3xl md:text-5xl whitespace-nowrap">
                  EXPERT OF <br className="md:hidden" /> TEAM
                </h5>
                <p className="text-[#667085] max-md:hidden text-lg md:text-xl mt-2">
                  A team of pros restoring your kicks and gear — one detail at a
                  time.
                </p>
              </div>
              <div className="w-12 h-12 md:w-[72px] md:h-[72px] bg-secondary rounded-full md:absolute top-3 right-3 flex items-center justify-center">
                <Link href="/about-us">
                  <GoArrowUpRight className="w-8 h-8 text-white text-center" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="md:absolute w-[42%] md:top-0 md:right-7 md:w-[259px]">
          <Image
            src="/images/img_hero.png"
            alt="cuci sepatu jogja"
            width={259}
            height={189}
            className="w-[199px] h-[159px] md:w-[259px] md:h-[189px] object-cover rounded-4xl"
          />
          <p className="mt-3 leading-tight">
            A very elegant grey suit <br />
            <span className="text-gray">suitable for work.</span>
          </p>
        </div>

        {/* <div className="w-full flex items-center justify-center"> */}
        <div className="w-full md:flex items-center justify-center mt-3 md:mt-0">
          <div className="md:ml-14 w-[199px] md:w-[246px] flex items-end gap-4 md:gap-8">
            <Image
              src="/images/img_hero.png"
              alt="cuci sepatu jogja"
              width={246}
              height={246}
              className="h-[199px] md:w-[246px] md:h-[246px] object-cover rounded-4xl"
            />
            <div className="w-full mb-6 flex gap-3 max-md:flex-wrap">
              <p className="leading-tight w-[140px]">
                Empowering you to take bold steps forward <br />{" "}
                <span className="text-gray">with confidence and clarity</span>
              </p>
              <Link href="/about-us">
                <GoArrowUpRight className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why_Choose_Us;
