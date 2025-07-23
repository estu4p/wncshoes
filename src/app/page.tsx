import Footer from "@/sections/Footer";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Location from "@/sections/Location";
import OurTeam from "@/sections/Our_Team";
import Services from "@/sections/Services";
import Why_Choose_Us from "@/sections/Why_Choose_Us";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative overflow-hidden ">
      <Hero />
      <OurTeam />
      <Services />
      <Why_Choose_Us />
      <Gallery />
      <Location />
      {/* <Footer /> */}
    </main>
  );
}
