import Image from "next/image";
const galleries = [
  {
    src: "/images/img_hero.png",
    alt: "cuci sepatu jogja",
  },
  {
    src: "/images/cleaning_shoes.jpeg",
    alt: "cuci sepatu jogja",
  },
  {
    src: "/images/img_nike_blue.jpeg",
    alt: "cuci sepatu jogja",
  },
  {
    src: "/images/Sport Shoe Cleaning.jpeg",
    alt: "cuci sepatu jogja",
  },
];

const GalleriesPage = () => {
  return (
    <div className="mt-[170px] px-6 lg:px-20 3xl:px-0 w-full">
      <div className="text-center">
        <h1 className="font-bebas text-7xl leading-[0.9]">
          Wash & Care Workshop Galleries
        </h1>
        <span className="text-gray text-2xl">
          Real result that speak for themselves.
        </span>
      </div>
      {/* images */}
      <div className="my-5 mx-auto gap-x-5 max-[350px]:columns-1 columns-2 md:columns-3 lg:columns-4 mt-20">
        {galleries.map((gallery, index) => (
          <div key={index}>
            <div className="w-full mt-[10px] break-inside-avoid">
              <Image
                src={gallery.src}
                alt={gallery.alt}
                width={500}
                height={500}
                loading="lazy"
                className="max-w-full rounded-[15px] brightness-90"
              />
              <p className="mt-2 px-1 leading-tight mb-5 font-bold">
                Sepatu menjadi keren ya!
              </p>
            </div>
            <div key={index} className="w-full mt-[10px] break-inside-avoid">
              <Image
                src={gallery.src}
                alt={gallery.alt}
                width={500}
                height={500}
                loading="lazy"
                className="max-w-full rounded-[15px] brightness-90"
              />
              <p className="mt-2 px-1 leading-tight mb-5 font-bold">
                Sepatu menjadi keren ya!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleriesPage;
