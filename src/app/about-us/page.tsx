import {
  IoCompassOutline,
  IoPeopleCircleOutline,
  IoRocketOutline,
} from "react-icons/io5";
import { VscTools } from "react-icons/vsc";

const AboutUsPage = () => {
  return (
    <div className="mt-[170px] px-6 lg:px-20 3xl:px-0 w-full">
      <div className="text-center">
        <h1 className="font-bebas text-7xl leading-[0.9]">
          This is Wash & Care
        </h1>
        <span className="text-gray text-2xl">
          We&rsquo;re a group of passionate cleaners, detailers, and artists who
          care deeply about every pair of sneakers that comes through our doors.
        </span>
      </div>
      {/* Our Journey */}
      <div className="mt-20">
        <div className="text-4xl font-bold flex gap-2 items-center">
          <IoCompassOutline className="max-md:text-5xl" />
          <h3>Our Journey</h3>
        </div>
        <h4 className="mt-5 text-3xl font-bold">
          From Passion to Precision — The Wash & Care Story
        </h4>
        <div className="font-light text-lg leading-[1.8] text-gray-600 mt-4 space-y-4 text-justify">
          <p className="">
            <span className="font-bold">
              Wash and Care was established in 2023
            </span>
            , born out of a genuine passio for sneakers and fashion culture.
            What started as a small side project in a humble space quickly
            evolved into a growing business with a clear mission: to provide
            high-quality care for shoes and apparel that people truly love.
          </p>
          <p>
            In the beginning, we offered only one thing —{" "}
            <span className="font-bold">sneaker cleaning</span>. With a few
            brushes, cleaning solutions, and strong determination, we focused on
            delivering the best results we could, one pair at a time. Word of
            mouth spread fast. Our loyal customers returned, and they started
            bringing more than just shoes: bags, jackets, hats — all needing the
            same level of care.
          </p>
          <p>
            By listening to our community, we began to understand that{" "}
            <span className="font-bold">cleaning was just the beginning.</span>{" "}
            Many items needed more than a simple wash — they needed restoration,
            customization, and even new life. That&rsquo;s when our journey
            truly began.
          </p>
        </div>
      </div>
      {/* Expanding Our Services */}
      <div className="mt-12">
        <div className="text-3xl font-bold flex gap-2 items-center">
          <VscTools className="max-md:text-5xl" />
          <h3>Expanding Our Services</h3>
        </div>
        <div className="font-light text-lg leading-[1.8] text-gray-600 mt-4 space-y-4 text-justify">
          <p className="">
            In late 2023, we added repaint and recolour services to meet the
            growing demand for restoration. Our team experimented, learned, and
            perfected techniques to bring back faded sneakers, discoloured
            soles, and worn-out materials. Then came reglue services,
            unyellowing soles, and even custom hand-painting, which allowed our
            customers to express themselves through unique wearable art.
          </p>
          <p>
            We didn’t stop at sneakers. As requests came in, we answered the
            call:
          </p>
          <ul className="font-bold list-disc ml-8">
            <li>
              Bag cleaning{" "}
              <span className="font-light">(from small to extra-large)</span>,
            </li>
            <li>Helmet and hat cleaning,</li>
            <li>Wallet and sandal care,</li>
            <li>
              <span className="font-light">And even</span> apparel detailing and
              painting.
            </li>
          </ul>
          <p>
            We took every new service seriously — researching, testing, and
            training to ensure each item was treated with care and respect.
          </p>
        </div>
      </div>
      {/* The People Behind the Work */}
      <div className="mt-12">
        <div className="text-3xl font-bold flex gap-2 items-center">
          <IoPeopleCircleOutline className="max-md:text-6xl" />
          <h3>The People Behind the Work</h3>
        </div>
        <div className="font-light text-lg leading-[1.8] text-gray-600 mt-4 space-y-4 text-justify">
          <p className="">
            Behind Wash and Care is a team of skilled individuals — artists,
            technicians, and sneaker lovers — who are dedicated to their craft.
            We don&rsquo;t just work on products; we restore memories,
            confidence, and personal style. Every item that comes into our hands
            is treated as if it were our own.
          </p>
          <p>
            We believe the people we serve deserve more than a quick clean. They
            deserve thoughtful, detailed care that reflects the personality of
            what they wear.
          </p>
        </div>
      </div>
      {/* Looking Forward */}
      <div className="mt-12">
        <div className="text-3xl font-bold flex gap-2 items-center">
          <IoRocketOutline className="max-md:text-4xl" />
          <h3>Looking Forward</h3>
        </div>
        <div className="font-light text-lg leading-[1.8] text-gray-600 mt-4 space-y-4 text-justify">
          <p className="">
            Today,{" "}
            <span className="font-bold">
              Wash and Care stands as more than just a cleaning service.
            </span>{" "}
            We are a growing brand built on community trust, creativity, and
            consistency. Whether it’s a rare sneaker drop, a vintage tote bag,
            or your everyday sandal — we’re committed to keeping your gear in
            its best shape.
          </p>
          <p>
            Our vision is to continue expanding — not just in service offerings,
            but in education and impact. We want to help more people understand
            how to take care of their items, reduce waste through restoration,
            and celebrate the stories behind the things they wear.
          </p>
          <p>
            Because at Wash and Care, we don’t just clean — We care. <br />
            <span className="font-bold">We restore. We transform.</span>
          </p>
        </div>
      </div>
      {/*  */}
    </div>
  );
};

export default AboutUsPage;
