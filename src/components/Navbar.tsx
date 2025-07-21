import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="px-8 py-6 flex items-center justify-between absolute top-0 w-full bg-transparent max-container z-50 text-foreground">
      <div className="flex items-center justify-between w-full">
        <Link href="/">
          <h1 className="font-bebas text-5xl">WNC</h1>
        </Link>
        <div className="items-center justify-between gap-8 hidden md:flex">
          <Link href="#about">
            <span className="text-[18px] hover:text-gray-600">About</span>
          </Link>
          <Link href="#about">
            <span className="text-[18px] hover:text-gray-600">Services</span>
          </Link>
          <Link href="#about">
            <span className="text-[18px] hover:text-gray-600">Contacts</span>
          </Link>
        </div>
        {/* <button className="px-4 py-1 rounded-2xl bg-secondary text-white hidden md:block">
          <Link href="#">Order</Link>
        </button> */}
        <Button className="hidden md:block font-normal">Order</Button>
      </div>
      <button>
        <Link href="#">
          <RiMenu3Line className="text-2xl md:hidden" />
        </Link>
      </button>
    </nav>
  );
};

export default Navbar;
