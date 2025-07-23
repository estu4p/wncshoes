"use client";

import Link from "next/link";
import { RiCloseLargeFill, RiMenu3Line } from "react-icons/ri";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [navMobileOpen, setNavMobileOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleNavMobileOpen = () => {
    setNavMobileOpen(!navMobileOpen);
  };

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (navMobileOpen && !e.target.closest(".navbar")) {
        setNavMobileOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [navMobileOpen]);

  const handleScroll = () => {
    if (window.scrollY > 20) setScroll(true);
    else setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`px-8 w-full navbar max-container z-50 text-foreground transition-all ease-in-out duration-300 ${
          scroll
            ? "fixed py-3 bg-white top-0"
            : "bg-transparent py-6 absolute top-0"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between w-full">
            <Link href="/">
              <h1 className="font-bebas text-5xl">WNC</h1>
            </Link>
            <div className="items-center justify-between gap-8 hidden md:flex">
              <Link href="#about">
                <span className="text-[18px] hover:text-gray-600">
                  About Us
                </span>
              </Link>
              <Link href="#about">
                <span className="text-[18px] hover:text-gray-600">
                  Services
                </span>
              </Link>
              <Link href="#about">
                <span className="text-[18px] hover:text-gray-600">
                  Contacts
                </span>
              </Link>
            </div>
            <Button className="hidden md:block font-normal">Order</Button>
          </div>
          <button onClick={handleNavMobileOpen}>
            <RiMenu3Line className="text-2xl md:hidden cursor-pointer" />
          </button>
        </div>
      </nav>
      <nav
        className={`bg-white navbar h-1/2 py-6 fixed w-full transition-all ease-in-out duration-400 z-50 ${
          navMobileOpen ? "top-0" : "top-[-100%]"
        }`}
      >
        <div className="px-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="font-bebas text-5xl">WNC</h1>
            </Link>
            <button onClick={handleNavMobileOpen}>
              <RiCloseLargeFill className="text-2xl cursor-pointer" />
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-around h-full w-full -mt-4 bg-white">
          <Link href="#about">
            <span className="text-4xl font-bebas hover:text-gray-600">
              About Us
            </span>
          </Link>
          <Link href="#about">
            <span className="text-4xl font-bebas hover:text-gray-600">
              Services
            </span>
          </Link>
          <Link href="#about">
            <span className="text-4xl font-bebas hover:text-gray-600">
              Contacts
            </span>
          </Link>
          <div className="-mt-3">
            <Button className="font-normal">Order Now</Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
