import { ArrowUpRight } from "lucide-react";
import React from "react";
import BgLayer from "../app_chunks/BgLayer";
const About = () => {
  return (
    <section className="min-h-[85vh] py-20 lg:py-0 overflow-hidden relative">
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
      <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
        <div className="container mx-auto px-4  ">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-semibold leading-tighter  mb-4">
              Engineering <span className="text-blue-500">Consultancy</span>{" "}
              committed to excellence
            </h1>
            <p className="text-lg text-gray-700">
              At ALYUSR, our company culture is based on teamwork, openness, and
              inclusion. For every project, we build a team that matches the
              specific needs of the client, bringing together the right mix of
              creative, technical, and leadership skills. This helps us deliver
              high-quality solutions that truly make a difference. We support
              our team with exciting projects, opportunities to grow, and a
              positive work environment. <br />
              From training programs to fun social events, we encourage learning
              and connection at every level. We’re proud of our team’s
              dedication and the trust we’ve built with our clients. At ALYUSR,
              we’re more than engineers; we’re partners in building a better
              future.
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
