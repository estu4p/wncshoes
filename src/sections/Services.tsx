"use client";
import Button from "@/components/Button";
import ServicesTitle from "@/components/services/ServicesTitle";
import Image from "next/image";
import { useEffect, useState } from "react";

const services = [
  {
    title: "shoe cleaning",
    count: "4",
    className: "flex justify-end max-md:text-end",
    items: [
      {
        src: "/images/deep-clean.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[363px] object-cover rounded-4xl border border-gray",
        text: "Deep Clean",
        subText: "Total care, inside and out.",
      },
      {
        src: "/images/regluar-clean.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-16 right-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[240px] object-cover rounded-4xl border border-gray",
        text: "Regular Clean",
        subText: "Everyday fresh, quick & clean.",
      },
      {
        src: "/images/one-day.png",
        alt: "cuci sepatu jogja",
        width: 200,
        height: 246,
        divClassName: "md:absolute bottom-16 right-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[240px] object-cover rounded-4xl  border border-gray",
        text: "One Day Service",
        subText: "Cleaned and ready in 24h.",
      },
      {
        src: "/images/fast-clean.png",
        alt: "cuci sepatu jogja",
        width: 190,
        height: 153,
        divClassName: "md:absolute -bottom-20 left-[126px] w-full md:w-[190px]",
        imgClassName:
          "w-[190px] h-[153px] object-cover rounded-4xl  border border-gray",
        text: "Fast Clean",
        subText: "Express clean for light dirt.",
      },
    ],
  },
  {
    title: "bag cleaning",
    count: "3",
    className: "max-md:text-end max-md:mr-10 md:ml-8",
    items: [
      {
        src: "/images/bag-small.png",
        alt: "cuci tas jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[363px] object-cover rounded-4xl  border border-gray",
        text: "Small Bag",
        subText: "Light touch, fresh result.",
      },
      {
        src: "/images/bag-medium.png",
        alt: "cuci tas jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-16 right-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[240px] object-cover rounded-4xl  border border-gray",
        text: "Medium Bag",
        subText: "Clean care, just the right fit.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 200,
        height: 246,
        divClassName: "md:absolute bottom-16 right-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[240px] object-cover rounded-4xl  border border-gray",
        text: "Large Bag",
        subText: "Thorough wash for bigger gear.",
      },
    ],
  },
  {
    title: "apparel cleaning",
    count: "4",
    className: "max-md:flex justify-end max-md:text-end mr-2",
    items: [
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[363px] object-cover rounded-4xl  border border-gray",
        text: "Hat/Topi",
        subText: "Deep clean for caps and hats.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-16 right-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[240px] object-cover rounded-4xl  border border-gray",
        text: "Helmet",
        subText: "Remove odor, sweat, and dirt.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 200,
        height: 246,
        divClassName: "md:absolute bottom-16 right-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[240px] object-cover rounded-4xl  border border-gray",
        text: "Sandal",
        subText: "Refresh straps, soles, and footbeds.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 190,
        height: 153,
        divClassName: "md:absolute -bottom-20 left-[126px] w-full md:w-[190px]",
        imgClassName:
          "w-[190px] h-[153px] object-cover rounded-4xl  border border-gray",
        text: "Wallet",
        subText: "Gentle wash for leather or fabric.",
      },
    ],
  },
  {
    title: "repair shoe",
    count: "4",
    className: "mr-0 md:mr-20 flex justify-end max-md:text-end",
    items: [
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[363px] object-cover rounded-4xl  border border-gray",
        text: "Reglue",
        subText: "Reattach detached soles or parts.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-16 right-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[240px] object-cover rounded-4xl  border border-gray",
        text: "Unyellowing Sole",
        subText: "Remove yellow tint from soles.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 200,
        height: 246,
        divClassName: "md:absolute bottom-16 right-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[240px] object-cover rounded-4xl  border border-gray",
        text: "Recolour",
        subText: "Repaint outer parts of shoes.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 190,
        height: 153,
        divClassName: "md:absolute -bottom-20 left-[126px] w-full md:w-[190px]",
        imgClassName:
          "w-[190px] h-[153px] object-cover rounded-4xl  border border-gray",
        text: "Repaint",
        subText: "Change entire shoe color tone.",
      },
    ],
  },
  {
    title: "custom",
    count: "3",
    className: "flex justify-center mr-8",
    items: [
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[363px] object-cover rounded-4xl  border border-gray",
        text: "Shoe Painting",
        subText: "Hand-painted shoes with unique designs.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-2.5 right-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[340px] object-cover rounded-4xl  border border-gray",
        text: "Totebag Painting",
        subText: "Custom art on your tote bags.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 190,
        height: 153,
        divClassName: "md:absolute -bottom-20 left-[126px] w-full md:w-[190px]",
        imgClassName:
          "w-[190px] h-[153px] object-cover rounded-4xl  border border-gray",
        text: "Apparel Painting",
        subText: "Personalized artwork on your clothing.",
      },
    ],
  },
  {
    title: "special treatment",
    count: "2",
    className: "mr-4 md:ml-4 max-md:text-center",
    items: [
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[200px] h-[153px] md:w-[246px] md:h-[363px] object-cover rounded-4xl  border border-gray",
        text: "One Day Service",
        subText: "Cleaned and ready in 24h.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-2.5 right-0 w-full md:w-[246px]",
        imgClassName:
          "h-[200px] w-[246px] md:h-[340px] object-cover rounded-4xl  border border-gray",
        text: "Discoutn 10% for instagram promotion",
        subText: "Tag us and enjoy 10% off.",
      },
    ],
  },
];

const Services = () => {
  const [serviceActive, setServiceActive] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setServiceActive((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handleClick = (index: number) => {
    setServiceActive(index);
    setIsAutoPlay(false);
  };

  return (
    <section className="w-full mt-20 md:mt-28 px-3 md:px-8 md:pb-16">
      <div className="relative ">
        <div className="flex md:items-center md:justify-center max-md:flex-row-reverse gap-3 md:gap-0">
          <div className="flex flex-col gap-7 md:gap-3 max-md:w-[60%] z-10 ">
            {services.map((service, index) => (
              <div
                className={service.className}
                key={index}
                onClick={() => handleClick(index)}
              >
                <ServicesTitle
                  title={service.title}
                  count={service.count}
                  isActive={serviceActive === index}
                />
              </div>
            ))}
            <div className="flex md:hidden justify-end mr-3 md:mr-10">
              <Button url="/services" className="py-2 px-6 rounded-full">
                Service Details
              </Button>
            </div>
          </div>
          <div className="max-md:space-y-6 max-md:-mt-10 z-0 max-md:h-[900px] overflow-y-scroll :">
            {services[serviceActive].items.map((item, index) => (
              <div key={index} className={` ${item.divClassName}`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className={item.imgClassName}
                />
                <p className="mt-3 leading-tight">{item.text}</p>
                <span className="text-gray leading-tight">{item.subText}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-end md:-mt-9 mr-3 md:mr-10">
          <Button url="/services" className="py-2 px-6 rounded-full">
            Service Details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
