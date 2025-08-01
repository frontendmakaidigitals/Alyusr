"use client";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import Image from "next/image";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import EngineeringCTA from "@/app/app_chunks/CTA";
const divisions = [
  {
    title: "Engineering & Design Division",
    description:
      "This division leads all technical planning and engineering design activities, ensuring safety, performance, and innovation across:",
    services: [
      "Structural Engineering",
      "MEP Design (Mechanical, Electrical, Plumbing)",
      "Infrastructure & Utility Networks",
      "Roads, Drainage & Hydrology",
      "Telecom & Low-Current Systems",
    ],
    image: "/images/engineering.jpg", // Replace with your local or remote image
  },
  {
    title: "Architecture & Urban Planning Division",
    description:
      "This team delivers creative, functional, and people-centric design solutions that enhance communities and align with future development goals.",
    services: [
      "Architectural & Interior Design",
      "Landscape Architecture",
      "Urban & Regional Planning",
      "Masterplanning & Land Use Studies",
      "Design Optimization & Value Engineering",
    ],
    image: "/images/architecture.jpg",
  },
  {
    title: "Construction & Project Management Division",
    description:
      "Responsible for turning ideas into reality, this division oversees projects from start to finish, ensuring cost control, time efficiency, and construction quality.",
    services: [
      "Project & Program Management",
      "Contract Administration",
      "Construction Supervision",
      "Permitting & Code Compliance",
      "Fire & Safety Engineering",
      "Site Investigations & Surveying",
    ],
    image: "/images/construction.jpg",
  },
  {
    title: "Sustainability & Smart Solutions Division",
    description:
      "Focused on environmental impact and digital transformation, this division integrates smart systems and sustainable strategies into every project.",
    services: [
      "Environmental & Sustainability Planning",
      "Green Building & LEED Advisory",
      "Smart Cities Integration",
      "Energy Efficiency & Resource Management",
      "Digital Twin & Performance Monitoring",
    ],
    image: "/images/sustainability.jpg",
  },
  {
    title: "Digital Engineering & BIM Division",
    description:
      "This division leads our digital transformation journey, enhancing project delivery through smart technologies and real-time coordination.",
    services: [
      "Building Information Modeling (BIM)",
      "GIS & Geospatial Services",
      "3D Modeling & Simulation",
      "Data Analytics for Project Optimization",
      "Digital Design Reviews",
    ],
    image: "/images/digital.jpg",
  },
  {
    title: "Strategy & Advisory Division",
    description:
      "Our consultants offer forward-looking insights, feasibility assessments, and project strategies that align with Saudi Vision 2030 and client goals.",
    services: [
      "Feasibility Studies",
      "Policy & Strategic Planning",
      "Vision 2030 Alignment",
      "Risk & Cost Analysis",
      "Market Research & Opportunity Mapping",
    ],
    image: "/images/strategy.jpg",
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
          <h1 className="text-2xl  text-slate-50">
            Company Overview
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 text-6xl font-semibold">
            Trusted Engineering Experts Supporting Saudi Vision 2030
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-center"
          src="/our division/banner.jpg"
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
                At <span className="text-blue-600">ALYUSR</span> Engineering
                Consulting, our strength lies in our structure. We operate
                through dedicated, expert-led divisions that work together to
                deliver smart, sustainable, and fully integrated engineering
                solutions. Each division is equipped with the tools, talent, and
                technical knowledge needed to serve clients across sectors,
                whether it&apos;s infrastructure, architecture, urban planning,
                or digital transformation. Together, we bring precision,
                quality, and agility to every stage of the project lifecycle.
              </p>

              <button className="mt-6 bg-gradient-to-br flex justify-center items-center gap-3 from-[#387EF0] to-[#2651C2] px-5 py-2.5 text-sm rounded-lg text-white hover:opacity-90 transition">
                Discover Our Story <ArrowUpRight />
              </button>
            </div>
            <div className="h-[450px]">
              <img
                src="/our division/Construction & Project Management.jpg"
                alt="About Background"
                className=" w-full h-full object-cover"
              />
              <BgLayer />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
        <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-blue-500">Core</span> Divisions
        </h2>
        <div className="grid lg:grid-cols-2 gap-10">
          {divisions.map((division, index) => (
            <motion.div
              key={division.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-blue-50 border border-gray-200 rounded-xl overflow-hidden shadow hover:shadow-md transition"
            >
              <div className="relative h-[300px] w-full">
                <Image
                  src="/our division/Engineering & Design Division.jpg"
                  alt={division.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-3xl text-sky-800 font-semibold  mb-2">
                  {division.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {division.description}
                </p>
                <ul className=" text-gray-700 space-y-1">
                  {division.services.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-gray-700"
                    >
                      <BadgeCheck className="w-5 h-5 fill-green-600 stroke-slate-50 mt-0.6 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <EngineeringCTA
        title="Working Together to Build the Future"
        desc="Each division operates with full autonomy and cross-functional coordination. This structure allows ALYUSR to stay agile, reduce delays, and deliver high-quality, end-to-end solutions for complex, multidisciplinary projects."
      />
    </div>
  );
}
