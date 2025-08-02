"use client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import EngineeringCTA from "@/app/app_chunks/CTA";
export default function TechnicalExpertisePage() {
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yTransform = useTransform(
    scrollY,
    [sectionTop, sectionTop + 400],
    [0, 100]
  );
  const capabilities = [
    {
      title: "Structural Engineering",
      desc: "Design of safe, efficient, and code-compliant structures for buildings and infrastructure.",

      img: "/images/structural.jpg", // Add a relevant image
    },
    {
      title: "Mechanical, Electrical & Plumbing (MEP)",
      desc: "Integrated building systems that ensure functionality, energy efficiency, and comfort.",

      img: "/images/mep.jpg",
    },
    {
      title: "Infrastructure Design",
      desc: "Roads, utilities, drainage, and networks are designed for high performance and resilience.",

      img: "/images/infrastructure.jpg",
    },
    {
      title: "Water, Drainage & Hydrology",
      desc: "Smart water management solutions, including stormwater systems and hydraulic modeling.",

      img: "/images/water.jpg",
    },
    {
      title: "Telecommunication & Low Current Systems",
      desc: "Reliable, secure systems for modern connectivity and building automation.",

      img: "/images/telecom.jpg",
    },
    {
      title: "Urban & Regional Planning",
      desc: "Large-scale planning with a focus on smart growth, land optimization, and community livability.",

      img: "/images/urban.jpg",
    },
  ];

  useEffect(() => {
    const top = sectionRef.current?.offsetTop || 0;
    setSectionTop(top);
  }, []);
  return (
    <main className=" text-gray-800">
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-2xl  text-slate-50">
            Technical Expertise
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 text-6xl font-semibold">
            Expertise You Can Trust. Delivery You Can Count On.
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="https://images.pexels.com/photos/7942430/pexels-photo-7942430.jpeg"
          alt="ALYUSR Engineering Hero Background"
        />
      </motion.div>
      <section className="min-h-[85vh] py-20 lg:py-0 overflow-hidden relative">
        {/* Background image */}

        {/* Left gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/30 via-sky-200/40 to-transparent" />

        {/* Container with text */}
        <div className="relative z-10 min-h-[85vh] flex flex-col h-full justify-center items-center">
          <div className="container gap-10 place-items-center grid grid-cols-1 lg:grid-cols-2 px-4  ">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-semibold leading-tighter  mb-4">
                Heading
              </h1>
              <p className="text-lg text-gray-700">
                At ALYUSR, technical excellence is at the core of everything we
                do. Our strength lies in our ability to combine deep domain
                knowledge with cutting-edge tools and a results-driven approach.
                From concept to completion, our engineers, architects, planners,
                and project managers apply international standards and local
                insight to deliver high-impact, future-ready solutions. <br />{" "}
                <br />
                With experience across residential, commercial, industrial, and
                infrastructure sectors, we bring specialized expertise to every
                phase of the project lifecycle, ensuring accuracy, efficiency,
                and sustainability at every step.
              </p>

              <button className="mt-6 bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
                Discover Our Story <ArrowUpRight />
              </button>
            </div>
            <div className="h-[450px]">
              <img
                src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg"
                alt="About Background"
                className=" w-full h-full object-cover"
              />
              <BgLayer />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 ">
            Multidisciplinary Capabilities
          </h2>
          <p className="mb-16 mt-3 text-center ">
            We offer a wide range of technical services across:
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {capabilities.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container ">
        <div className=" text-center">
          <h2 className="text-5xl font-semibold text-gray-800 mb-4">
            Advanced <span className="text-blue-500">Tools & Technologies</span>
          </h2>
          <p className="text-gray-700 mb-6">
            To deliver precision and speed, we rely on globally recognized tools
            such as:
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm text-gray-700">
            {[
              "AutoCAD",
              "Revit",
              "Civil 3D",
              "GIS Platforms",
              "BIM",
              "Topcon",
              "Trimble",
              "Leica Stations",
            ].map((tool, i) => (
              <li
                key={i}
                className="bg-sky-100 text-sky-800 font-medium rounded-lg px-4 py-2 text-center shadow-sm"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <EngineeringCTA
        title="Trusted by Public & Private Sectors"
        desc="Our technical expertise has earned the trust of government agencies, real estate developers, infrastructure contractors, and industrial clients. From large-scale urban master plans to specialized facility designs, we provide tailored solutions that meet both regulatory and operational goals."
      />
    </main>
  );
}
