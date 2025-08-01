"use client";
import {
  Building2,
  Ruler,
  Construction,
  TreePine,
  Cpu,
  Compass,
  ArrowUpRight,
} from "lucide-react";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
const divisions = [
  {
    icon: <Building2 className="w-6 h-6 text-sky-600" />,
    title: "Engineering & Design Division",
    points: [
      "Structural Engineering",
      "MEP Design (Mechanical, Electrical, Plumbing)",
      "Infrastructure & Utility Networks",
      "Roads, Drainage & Hydrology",
      "Telecom & Low-Current Systems",
    ],
  },
  {
    icon: <Ruler className="w-6 h-6 text-rose-600" />,
    title: "Architecture & Urban Planning Division",
    points: [
      "Architectural & Interior Design",
      "Landscape Architecture",
      "Urban & Regional Planning",
      "Masterplanning & Land Use Studies",
      "Design Optimization & Value Engineering",
    ],
  },
  {
    icon: <Construction className="w-6 h-6 text-yellow-600" />,
    title: "Construction & Project Management Division",
    points: [
      "Project & Program Management",
      "Contract Administration",
      "Construction Supervision",
      "Permitting & Code Compliance",
      "Fire & Safety Engineering",
      "Site Investigations & Surveying",
    ],
  },
  {
    icon: <TreePine className="w-6 h-6 text-green-600" />,
    title: "Sustainability & Smart Solutions Division",
    points: [
      "Environmental & Sustainability Planning",
      "Green Building & LEED Advisory",
      "Smart Cities Integration",
      "Energy Efficiency & Resource Management",
      "Digital Twin & Performance Monitoring",
    ],
  },
  {
    icon: <Cpu className="w-6 h-6 text-indigo-600" />,
    title: "Digital Engineering & BIM Division",
    points: [
      "Building Information Modeling (BIM)",
      "GIS & Geospatial Services",
      "3D Modeling & Simulation",
      "Data Analytics for Project Optimization",
      "Digital Design Reviews",
    ],
  },
  {
    icon: <Compass className="w-6 h-6 text-purple-600" />,
    title: "Strategy & Advisory Division",
    points: [
      "Feasibility Studies",
      "Policy & Strategic Planning",
      "Vision 2030 Alignment",
      "Risk & Cost Analysis",
      "Market Research & Opportunity Mapping",
    ],
  },
];

export default function Page() {
  const [sectionTop, setSectionTop] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yTransform = useTransform(
    scrollY,
    [sectionTop, sectionTop + 400],
    [0, 100]
  );

  useEffect(() => {
    const top = sectionRef.current?.offsetTop || 0;
    setSectionTop(top);
  }, []);
  return (
    <div className="">
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-slate-50">
            Company Overview
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Trusted Engineering Experts Supporting Saudi Vision 2030
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
                At ALYUSR Engineering Consulting, our strength lies in our
                structure. We operate through dedicated, expert-led divisions
                that work together to deliver smart, sustainable, and fully
                integrated engineering solutions. Each division is equipped with
                the tools, talent, and technical knowledge needed to serve
                clients across sectors, whether it&apos;s infrastructure,
                architecture, urban planning, or digital transformation.
                Together, we bring precision, quality, and agility to every
                stage of the project lifecycle.
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
      <div className=" container my-20">
        <div className="grid md:grid-cols-2 gap-8">
          {divisions.map((division, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gray-100 p-3 rounded-full">
                  {division.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {division.title}
                </h3>
              </div>
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-1">
                {division.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
