import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Download } from "lucide-react";
import Link from "next/link";

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
    <section className="py-20 text-center bg-white">
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
      <div className="mt-12">
        <Link href="/Alyusr-Company-Profile.pdf" target="_blank">
          <button className="inline-flex items-center gap-2 px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 transition rounded-full text-lg font-medium shadow-md hover:shadow-lg">
            <Download className="w-5 h-5" />
            Download Our Profile
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Marquee;
