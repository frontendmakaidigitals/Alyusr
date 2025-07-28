import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

import Image from "next/image";
import BgLayer from "../app_chunks/BgLayer";
const Marquee = () => {
  const partners = [
    { title: "Agriserv", img: "agriserv logo.webp" },
    { title: "AHC", img: "ahc logo.png" },
    { title: "Gasco", img: "gasco logo.jpg" },
    { title: "Ladun", img: "ladun logo.png" },
    { title: "Land Sterling", img: "land sterling logo.jpg" },
    { title: "Memar", img: "memar logo.jpg" },
    { title: "Miemar", img: "Miemar logo.jpg" },
    { title: "Naber Real Estate", img: "naber real estate logo.jpg" },
    { title: "Nadec", img: "nadec logo.png" },
    { title: "Othaim", img: "othaim logo.jpg" },
    { title: "Rabiah & Nassar", img: "rabiah & nassar logo.png" },
    { title: "Rikaz", img: "rikaz logo.jpg" },
    { title: "Saline Water", img: "saline water logo.png" },
  ];

  return (
    <section className="pt-20 text-center bg-white">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-semibold max-w-3xl mx-auto">
        Our Trusted <span className="text-blue-600">Partners</span>
      </h1>

      {/* Client Logo Slider */}
      <div className="mt-10">
        <InfiniteMovingCards
          items={partners}
          dir={"client logo"}
          direction="right"
          speed="slow"
          iconSize={"size-40"}
          gap={"gap-8"}
        />
      </div>

      {/* CTA Button */}
      <div className="relative container mx-auto max-w-5xl h-[270px] w-full rounded-2xl overflow-hidden shadow-xl mt-10">
        {/* Background image */}
        <Image
          src={
            "https://images.pexels.com/photos/139207/pexels-photo-139207.jpeg"
          }
          alt="Dubai Property"
          objectFit="cover"
          className="absolute !w-full !h-full object-cover inset-0"
          width={1200}
          height={120}
        />
        <BgLayer color="bg-black/50" />

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 text-white">
          <h2 className="text-2xl md:text-3xl max-w-2xl font-bold mb-2">
            Your Trusted Partner in Nation-Building with Al Yusr
          </h2>
          <p className="text-sm md:text-base max-w-3xl">
            Backed by in-house expertise and global certifications, we deliver
            solutions for government and private sector projects aligned with
            Vision 2030. properties or speak to our experienced consultants
            today.
          </p>
          <button className="mt-5 px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all">
            VIEW NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
