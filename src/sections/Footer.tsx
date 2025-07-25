import Link from "next/link";
import React from "react";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

const Footer = () => {
  return (
    <section className="w-full footer-background px-8 pt-14 pb-5 bg-[#0F0F0F] text-[#FEF2EE] mt-28">
      <div className="flex flex-col md:flex-row justify-between gap-7">
        <div className="w-full">
          <h3 className="font-bebas text-7xl">wash and care</h3>
          <span className="text-xl">
            Chaos on the Ground but Spotless all Around
          </span>
          <div className="text-xl space-y-3 mt-4">
            <span className="block font-bold">Contact US</span>
            <div className="">
              <Link
                href="/https://wa.me/6287852916445"
                className="flex items-center gap-3"
              >
                <BsWhatsapp />
                +62 87852916445
              </Link>
              <Link href="/ig" className="mt-2 flex items-center gap-3">
                <BsInstagram /> <span className="-mt-1">wnc.shoes</span>
              </Link>
            </div>
          </div>
        </div>
        {/* information */}
        <div className="flex justify-between w-full flex-wrap gap-5">
          <div className="">
            <h5 className="font-bebas text-3xl">quick links</h5>
            <div className="flex flex-col gap-3 text-lg mt-3">
              <Link href="#">
                <span>Our Team</span>
              </Link>
              <Link href="#">
                <span>Services</span>
              </Link>
              <Link href="#">
                <span>Gallery</span>
              </Link>
              <Link href="#">
                <span>About Us</span>
              </Link>
            </div>
          </div>
          <div className="">
            <h5 className="font-bebas text-3xl">Address</h5>
            <div className="flex flex-col gap-3 text-lg mt-3">
              {/* <Link href="#"> */}
              <span>Jl. Pundung, Nogotirto</span>
              {/* </Link> */}
              {/* <Link href="#"> */}
              <span>Gamping, Sleman</span>
              {/* </Link> */}
              {/* <Link href="#"> */}
              <span>Yogyakarta</span>
              {/* </Link> */}
              {/* <Link href="#"> */}
              <span>ID</span>
              {/* </Link> */}
            </div>
          </div>
          <div className="">
            <h5 className="font-bebas text-3xl">Follow</h5>
            <div className="flex flex-col gap-3 text-lg mt-3">
              <Link href="#">
                <span>Instagram</span>
              </Link>
              <Link href="#">
                <span>Tiktok</span>
              </Link>
              <Link href="#">
                <span>Twitter</span>
              </Link>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
      <hr className="w-full bg-[#FEF2EE] mt-16 ]" />
      <div className="w-full text-center mt-3">
        <span className="text- tracking-wider">
          @2025 WNC | ALL RIGHTS RESERVED
        </span>
      </div>
    </section>
  );
};

export default Footer;
