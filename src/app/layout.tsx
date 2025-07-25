import type { Metadata } from "next";
// import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";

// const bebas = Bebas_Neue({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-bebas",
//   display: "swap",
// });

// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: "400",
//   variable: "--font-poppins",
//   display: "swap",
// });

export const metadata: Metadata = {
  title: "Wash & Care",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${bebas.variable} ${poppins.variable}  antialiased max-container`}
        className={` antialiased max-container`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
