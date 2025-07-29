import { ArrowUpRight } from "lucide-react";
import React from "react";
import BgLayer from "../app_chunks/BgLayer";
const About = () => {
  return (
    <section className="h-[85vh] overflow-hidden relative">
      {/* Background image */}
      <img
        src="/aboutBg.jpg"
        alt="About Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <BgLayer />

      {/* Left gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-50/95 via-slate-50/80 to-transparent" />

      {/* Container with text */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 ">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-semibold leading-tighter  mb-4">
              Engineering <span className="text-blue-500">Consultancy</span>{" "}
              committed to excellence
            </h1>
            <p className="text-lg text-gray-700">
              ALYUSR Engineering Consulting is a Saudi engineering consultancy
              providing innovative and sustainable solutions aligned with Vision
              2030. They emphasize smart infrastructure, urban development, and
              high-quality services across KSA and globally.
              <br /> Rooted in Vision 2030, we help shape smart cities,
              high-tech infrastructure, and livable communities through
              future-ready design and delivery.
            </p>

            <button className="mt-6 bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
              Discover Our Story <ArrowUpRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
