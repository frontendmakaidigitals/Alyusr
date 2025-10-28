import React from "react";
import Link from "next/link";
import Image from "next/image";

import BgLayer from "../app_chunks/BgLayer";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
const Marquee = () => {
  const partners = [
    { title: "Agriserv", img: "agriserv logo.webp" },
    { title: "AHC", img: "ahc logo.webp" },
    { title: "Gasco", img: "gasco logo.webp" },
    { title: "Ladun", img: "ladun logo.webp" },
    { title: "Land Sterling", img: "land sterling logo.webp" },
    { title: "Memar", img: "memar logo.webp" },
    { title: "Miemar", img: "Miemar logo.webp" },
    { title: "Naber Real Estate", img: "naber real estate logo.webp" },
    { title: "Nadec", img: "nadec logo.webp" },
    { title: "Othaim", img: "othaim logo.webp" },
    { title: "Rabiah & Nassar", img: "rabiah-nassar logo.webp" },
    { title: "Rikaz", img: "rikaz logo.webp" },
    { title: "Saline Water", img: "saline water logo.webp" },
  ];

  return (
    <section className="pt-20 text-center bg-white">
      {/* Heading */}
      <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold max-w-3xl mx-auto">
        Our Trusted <span className="text-blue-600">Partners</span>
      </h1>

      {/* Client Logo Slider */}
      <div className="mt-10">
        <InfiniteMovingCards
          cards={true}
          dir={"client logo"}
          direction="right"
          gap={"gap-8"}
          iconSize={"size-40"}
          items={partners}
          speed="slow"
        />
      </div>

      {/* CTA Button */}
      <div className="relative container mx-auto lg:max-w-5xl h-[270px] w-full lg:rounded-2xl overflow-hidden shadow-xl mt-10">
        {/* Background image */}
        <Image
          alt="Dubai Property"
          className="absolute !w-full !h-full object-cover inset-0"
          height={120}
          objectFit="cover"
          src={
            "https://images.pexels.com/photos/139207/pexels-photo-139207.jpeg"
          }
          width={1200}
        />
        <BgLayer color="bg-black/50" />

        <div className="relative  z-10 h-full flex flex-col justify-center items-center text-center lg:px-6 text-white">
          <h2 className="text-xl md:text-4xl max-w-2xl font-bold mb-2">
            Your Trusted Partner in Nation-Building with Al Yusr
          </h2>
          <p className="text-sm md:text-base max-w-3xl">
            Backed by in-house expertise and global certifications, we deliver
            solutions for government and private sector projects aligned with
            Vision 2030. properties or speak to our experienced consultants
            today.
          </p>
          <Link
            className="mt-5 px-6 py-2 rounded-full border border-white text-white hover:bg-white hover:text-black transition-all"
            href="/brochure/brochure.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            VIEW NOW
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
