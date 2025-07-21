import Image from "next/image";

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
          {/* result speak for themselves */}
        </div>
        <div className="relative py-8">
          <div className="flex items-center justify-center">
            <Image
              src="/images/img_hero.png"
              alt="cuci sepatu jogja"
              width={320}
              height={320}
              className="w-[320px] h-[320px] object-cover rounded-4xl brightness-90 z-10"
            />
          </div>
          <div className="flex items-center justify-between absolute top-1/2 -translate-y-1/2 w-full text-[150px] font-bold font-bebas text-foreground">
            <span>[</span>
            <span>]</span>
          </div>
        </div>
        <p className="mt-3 text-foreground text-2xl font-semibold">
          we go beyond cleaning - we repair, refresh and renew. whether it's
          your favorite sneakers, hats, or bags, see how we bring life back to
          every piece.
        </p>
      </div>
      {/* we go beyond cleaning - we repair, refresh and renew. 
        whether it's your favorite sneakers, hats, or bags, 
        see how we bring life back to every piece. */}
    </section>
  );
};

export default Gallery;
