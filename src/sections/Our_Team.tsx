import Button from "@/components/Button";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const OurTeam = () => {
  return (
    <section className="min-h-screen w-full -mt-28 px-3 text-[#FEF2EE] pb-10">
      <div className="our-team-background rounded-3xl bg-[#0F0F0F] p-8 md:p-12 space-y-11 relative overflow-hidden">
        {/* behind */}
        <div className="absolute space-x-7 overflow-hidden -left-6 top-[55%] -translate-y-[55%] md:top-1/2 md:-translate-y-1/2 -z-10 opacity-40 tracking-[-1px] font-bebas whitespace-nowrap text-5xl">
          <span className="">the team behind wash & care</span>
          <span className="">the team behind wash & care</span>
          <span className="">the team behind wash & care</span>
          <span className="">the team behind wash & care</span>
        </div>
        {/* top */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-6 md:gap-0">
          <h2 className="text-8xl font-bebas leading-[0.9] tracking-[-2px]">
            THE TEAM BEHIND
            <br /> WASH <br className="md:hidden" /> AND CARE
          </h2>
          <div className="md:w-1/3">
            <p className="text-xl text-start md:text-right">
              We're a group of passionate cleaners, detailers, and artists who
              care deeply about every pair of sneakers that comes through our
              doors.
            </p>
            <div className="mt-8 flex items-center justify-end">
              <Link
                href="/about-us"
                className="underline text-2xl font-bold flex items-center gap-1.5"
              >
                LEARN MORE
                <GoArrowUpRight className="w-8 h-8" />
              </Link>
            </div>
          </div>
        </div>
        {/* center */}
        <div className="flex items-center justify-center">
          <div className="relative z-20">
            <Image
              src="/images/img_hero.png"
              alt="cuci sepatu jogja"
              width={427}
              height={355}
              className="w-[447px] h-[305px] md:h-[375px] object-cover rounded-4xl brightness-90 z-10"
            />
            <span className="text-3xl w-full md:w-[100px] text-right font-bebas leading-[1] absolute max-md:-right-0 -bottom-10 md:-left-28 md:bottom-4">
              THIS IS OUR TEAM
            </span>
            <Button className="py-2 px-4 md:px-8 rounded-full absolute bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
              Ready to Meet Our Team?
            </Button>
          </div>
        </div>
        {/* bottom */}
        <div className="pt-8 flex flex-col-reverse gap-7 md:gap-0 md:flex-row items-end justify-between">
          <div className="">
            <p className="text-2xl font-bold">
              <span className="text-secondary">500 + </span>Orders every mounth
            </p>
            <p className="text-2xl font-bold mt-1">
              <span className="text-secondary ">200,000 + </span>
              Satisfied customers
            </p>
          </div>
          <div className="text-right ">
            <h3 className="text-5xl md:text-6xl font-bebas">
              - Expert of Team
            </h3>
            <h3 className="text-5xl md:text-6xl font-bebas">- Guarante</h3>
            <h3 className="text-5xl md:text-6xl font-bebas">
              - 24/7 Customer care service
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
