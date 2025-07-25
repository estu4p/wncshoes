import Button from "@/components/Button";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Gallery = () => {
  return (
    <section className="w-full min-h-screen px-3 md:px-8 mt-28 ">
      <div className="">
        <div className="text-8xl md:text-[160px] font-bebas text-foreground leading-[0.9] tracking-[-5px] md:tracking-[-8px]">
          <div className="flex items-center justify-between">
            <span>real</span>
            <span>result</span>
            <span className="max-md:hidden">that</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="md:hidden">that</span>
            <span>speak</span>
            <span className="max-md:hidden">for</span>
            <span className="max-md:hidden">themselves</span>
          </div>
          <div className="md:hidden flex flex-col items-start justify-between">
            <span className="">for</span>
            <span className="">themselves</span>
          </div>
        </div>
        <div className="relative py-8">
          <div className="w-[93%] md:w-[95%] flex items-center justify-center">
            <div className="overflow-hidden group z-10 ml-6 md:ml-8">
              <div className="flex animate-loop-scroll space-x-7 w-max ">
                {[...Array(2)].flatMap((_, outerIndex) =>
                  Array.from({ length: 7 }).map((_, i) => (
                    <Image
                      key={`image-${outerIndex}-${i}`}
                      width={320}
                      height={320}
                      loading="lazy"
                      src="/images/img_hero.png"
                      className="w-60 h-60 object-cover object-center rounded-4xl"
                      alt="Image"
                    />
                  ))
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between absolute -left-3 -right-3 top-1/2 -translate-y-1/2 text-[150px] font-bold font-bebas text-foreground ">
            <span>[</span>
            <span>]</span>
          </div>
        </div>
        <div className="text-end mr-4">
          <Button url="/gallery" className="py-2 px-6 rounded-full">
            See More <GoArrowUpRight className="inline ml-1 text-2xl" />
          </Button>
        </div>
        {/* <div className="text-end mr-4">
          <Link href="/gallery">
            <span className="underline text-lg">See More</span>
            <GoArrowUpRight className="inline text-2xl ml-1" />
          </Link>
        </div> */}
        <p className="mt-2 text-foreground text-2xl text-justify">
          we go beyond cleaning - we repair, refresh and renew. whether
          it&rsquo;s your favorite sneakers, hats, or bags, see how we bring
          life back to every piece.
        </p>
      </div>
      {/* we go beyond cleaning - we repair, refresh and renew. 
        whether it&rsquo;s your favorite sneakers, hats, or bags, 
        see how we bring life back to every piece. */}
    </section>
  );
};

export default Gallery;
