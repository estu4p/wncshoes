import Button from "@/components/Button";
import ServicesTitle from "@/components/services/ServicesTitle";
import Image from "next/image";

const Services = () => {
  return (
    <section className="w-full mt-28 px-3 md:px-8 md:pb-16">
      <div className="relative">
        <div className="flex md:items-center md:justify-center max-md:flex-row-reverse gap-3 md:gap-0">
          <div className="flex flex-col gap-7 md:gap-3 max-md:w-[60%] z-10">
            <div className="flex justify-end max-md:text-end">
              <ServicesTitle
                title="shoe cleaning"
                count="4"
                titleColour="text-foreground"
              />
            </div>
            <div className="max-md:text-end max-md:mr-10 md:ml-8">
              <ServicesTitle title="bag cleaning" count="4" />
            </div>
            <div className="max-md:flex justify-end max-md:text-end mr-2">
              <ServicesTitle title="apparel cleaning" count="5" />
            </div>
            <div className="mr-0 md:mr-20 flex justify-end max-md:text-end">
              <ServicesTitle title="repair shoe" count="5" />
            </div>
            <div className="flex justify-center mr-8">
              <ServicesTitle title="custom" count="4" />
            </div>
            <div className="mr-4 md:ml-4 max-md:text-center">
              <ServicesTitle title="special treatment" count="4" />
            </div>
          </div>
          <div className="max-md:space-y-6 max-md:-mt-10 z-0">
            {/* img 1 */}
            <div className="md:absolute top-0 left-0 w-full md:w-[246px]">
              <Image
                src="/images/img_hero.png"
                alt="cuci sepatu jogja"
                width={246}
                height={363}
                className="w-[246px] h-[260px] md:h-[363px] object-cover rounded-4xl"
              />
              <p className="mt-3 leading-tight">
                Deep Clean <br />
                <span className="text-gray">suitable for work.</span>
              </p>
            </div>
            {/* img 2 */}
            <div className="md:absolute -top-2.5 right-0 w-full md:w-[246px]">
              <Image
                src="/images/img_hero.png"
                alt="cuci sepatu jogja"
                width={246}
                height={340}
                className="h-[200px] w-[246px] md:h-[340px] object-cover rounded-4xl"
              />
              <p className="mt-3 leading-tight">
                Regular Clean <br />
                <span className="text-gray">
                  {" "}
                  the appearance more attractive.
                </span>
              </p>
            </div>
            {/* img 3 */}
            <div className="md:absolute -bottom-20 left-[126px] w-full md:w-[190px]">
              <Image
                src="/images/img_hero.png"
                alt="cuci sepatu jogja"
                width={190}
                height={153}
                className="w-[190px] h-[153px] object-cover rounded-4xl"
              />
              <p className="mt-3 leading-tight">
                Fast Clean
                <br />
                <span className="text-gray">contemporary style.</span>
              </p>
            </div>
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
