import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const Location = () => {
  return (
    <section className="w-full px-3 md:px-8 mt-20 md:mt-28 text-foreground">
      <div className="">
        <h2 className="font-bebas text-8xl md:text-9xl text-center text-secondary">
          find us here
        </h2>
        <div className="text-center">
          <p className="text-xl">
            No GPS stress - just clean results. Find us at our HQ and gives your
            gear the treatment it deserves
          </p>
        </div>
        <div className="w-full mt-4 relative">
          <Image
            src="/images/img_hero.png"
            alt="cuci sepatu jogja"
            width={320}
            height={390}
            className="w-full h-[340px] md:h-[390px] object-cover rounded-4xl brightness-90"
          />
          <Link
            href="https://maps.app.goo.gl/nt2TmYoBJ5aK9D9g8"
            target="_blank"
          >
            <div className="bg-[#CBF1EA] absolute bottom-3 left-1/2 -translate-x-1/2 rounded-[28px] py-4 px-6 flex items-center justify-between gap-6">
              <h5 className="font-bebas text-4xl text-foreground whitespace-nowrap">
                open on gmaps
              </h5>
              <div className="w-[40px] h-[40px] bg-secondary rounded-full flex items-center justify-center">
                <GoArrowUpRight className="w-7 h-7 text-white" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Location;
