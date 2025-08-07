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
              More Than<span className="text-blue-500">Engineering</span>, It’s
              a Commitment to{" "}
              <span className="text-blue-500">Our Partners</span>
            </h1>
            <p className="text-lg text-gray-700">
              At ALYUSR, we believe engineering is not just about structures and
              systems, it&apos;s about people. Every design we create, every plan we
              draw, and every solution we deliver is rooted in human connection.
              Our story is shaped by a shared purpose: to build not just better
              spaces, but better futures. We bring together minds from different
              backgrounds, each contributing creativity, precision, and care.
              From the early brainstorming sessions to project handovers, we
              work as one; listening deeply, learning constantly, and growing
              together. <br />
              Our workplace is filled with conversations, laughter, mentorship,
              and moments of quiet focus. This is what makes ALYUSR more than a
              consultancy. We&apos;re a community of thinkers and doers, united by
              values of trust and excellence. And we’re proud to walk this
              journey with our clients, one story at a time.
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
