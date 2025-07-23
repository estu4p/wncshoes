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
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[246px] h-[260px] md:h-[363px] object-cover rounded-4xl",
        text: "Deep Clean",
        subText: "suitable for work.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-2.5 right-0 w-full md:w-[246px]",
        imgClassName:
          "h-[200px] w-[246px] md:h-[340px] object-cover rounded-4xl",
        text: "Regular Clean",
        subText: "the appearance more attractive.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 190,
        height: 153,
        divClassName: "md:absolute -bottom-20 left-[126px] w-full md:w-[190px]",
        imgClassName: "w-[190px] h-[153px] object-cover rounded-4xl",
        text: "Fast Clean",
        subText: "contemporary style.",
      },
    ],
  },
  {
    title: "bag cleaning",
    count: "4",
    className: "max-md:text-end max-md:mr-10 md:ml-8",
    items: [
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[246px] h-[260px] md:h-[363px] object-cover rounded-4xl",
        text: "Small Bag",
        subText: "suitable for work.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-2.5 right-0 w-full md:w-[246px]",
        imgClassName:
          "h-[200px] w-[246px] md:h-[340px] object-cover rounded-4xl",
        text: "Medium Bag",
        subText: "the appearance more attractive.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 190,
        height: 153,
        divClassName: "md:absolute -bottom-20 left-[126px] w-full md:w-[190px]",
        imgClassName: "w-[190px] h-[153px] object-cover rounded-4xl",
        text: "Large Bag",
        subText: "contemporary style.",
      },
    ],
  },
  {
    title: "apparel cleaning",
    count: "5",
    className: "max-md:flex justify-end max-md:text-end mr-2",
    items: [
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[246px] h-[260px] md:h-[363px] object-cover rounded-4xl",
        text: "Deep Clean",
        subText: "suitable for work.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-2.5 right-0 w-full md:w-[246px]",
        imgClassName:
          "h-[200px] w-[246px] md:h-[340px] object-cover rounded-4xl",
        text: "Regular Clean",
        subText: "the appearance more attractive.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 190,
        height: 153,
        divClassName: "md:absolute -bottom-20 left-[126px] w-full md:w-[190px]",
        imgClassName: "w-[190px] h-[153px] object-cover rounded-4xl",
        text: "Fast Clean",
        subText: "contemporary style.",
      },
    ],
  },
  {
    title: "repair shoe",
    count: "5",
    className: "mr-0 md:mr-20 flex justify-end max-md:text-end",
    items: [
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[246px] h-[260px] md:h-[363px] object-cover rounded-4xl",
        text: "Deep Clean",
        subText: "suitable for work.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-2.5 right-0 w-full md:w-[246px]",
        imgClassName:
          "h-[200px] w-[246px] md:h-[340px] object-cover rounded-4xl",
        text: "Regular Clean",
        subText: "the appearance more attractive.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 190,
        height: 153,
        divClassName: "md:absolute -bottom-20 left-[126px] w-full md:w-[190px]",
        imgClassName: "w-[190px] h-[153px] object-cover rounded-4xl",
        text: "Fast Clean",
        subText: "contemporary style.",
      },
    ],
  },
  {
    title: "custom",
    count: "4",
    className: "flex justify-center mr-8",
    items: [
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[246px] h-[260px] md:h-[363px] object-cover rounded-4xl",
        text: "Deep Clean",
        subText: "suitable for work.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-2.5 right-0 w-full md:w-[246px]",
        imgClassName:
          "h-[200px] w-[246px] md:h-[340px] object-cover rounded-4xl",
        text: "Regular Clean",
        subText: "the appearance more attractive.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 190,
        height: 153,
        divClassName: "md:absolute -bottom-20 left-[126px] w-full md:w-[190px]",
        imgClassName: "w-[190px] h-[153px] object-cover rounded-4xl",
        text: "Fast Clean",
        subText: "contemporary style.",
      },
    ],
  },
  {
    title: "special treatment",
    count: "4",
    className: "mr-4 md:ml-4 max-md:text-center",
    items: [
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 363,
        divClassName: "md:absolute top-0 left-0 w-full md:w-[246px]",
        imgClassName:
          "w-[246px] h-[260px] md:h-[363px] object-cover rounded-4xl",
        text: "Deep Clean",
        subText: "suitable for work.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 246,
        height: 340,
        divClassName: "md:absolute -top-2.5 right-0 w-full md:w-[246px]",
        imgClassName:
          "h-[200px] w-[246px] md:h-[340px] object-cover rounded-4xl",
        text: "Regular Clean",
        subText: "the appearance more attractive.",
      },
      {
        src: "/images/img_hero.png",
        alt: "cuci sepatu jogja",
        width: 190,
        height: 153,
        divClassName: "md:absolute -bottom-20 left-[126px] w-full md:w-[190px]",
        imgClassName: "w-[190px] h-[153px] object-cover rounded-4xl",
        text: "Fast Clean",
        subText: "contemporary style.",
      },
    ],
  },
];

const Services = () => {
  const [serviceActive, setServiceActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setServiceActive((prev) => (prev + 1) % services.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setServiceActive(index);
  };

  return (
    <section className="w-full mt-28 px-3 md:px-8 md:pb-16">
      <div className="relative">
        <div className="flex md:items-center md:justify-center max-md:flex-row-reverse gap-3 md:gap-0">
          <div className="flex flex-col gap-7 md:gap-3 max-md:w-[60%] z-10">
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
                  // titleColour="text-foreground"
                />
              </div>
            ))}
          </div>
          <div className="max-md:space-y-6 max-md:-mt-10 z-0">
            {services[serviceActive].items.map((item, index) => (
              <div key={index} className={item.divClassName}>
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
        <div className="flex justify-end md:-mt-9 mr-3 md:mr-10">
          <Button className="py-2 px-6 rounded-full">Service Details</Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
