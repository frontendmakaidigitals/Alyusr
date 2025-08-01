"use client";
import BgLayer from "../../app_chunks/BgLayer";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import {
  Building,
  PenTool,
  ClipboardList,
  Leaf,
  Cpu,
  BarChart3,
  Layers,
  SatelliteDish,
  ShieldCheck,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
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

  const icons = { Building, PenTool, ClipboardList, Leaf, Cpu, BarChart3 };
  type Department = {
    title: string;
    desc: string;
    icon: keyof typeof icons;
  };

  const departments = [
    {
      title: "Engineering & Infrastructure",
      desc: "Handles structural, MEP, hydrology, roads, and utilities design.",
      icon: "Building",
    },
    {
      title: "Architecture & Urban Design",
      desc: "Focuses on creative, sustainable, and culturally relevant design solutions.",
      icon: "PenTool",
    },
    {
      title: "Project & Construction Management",
      desc: "Delivers end-to-end planning, execution, and supervision of complex projects.",
      icon: "ClipboardList",
    },
    {
      title: "Environmental & Sustainability",
      desc: "Leads environmental impact studies, EHS compliance, and green certification strategies.",
      icon: "Leaf",
    },
    {
      title: "Digital Engineering & Smart Solutions",
      desc: "Oversees BIM implementation, simulation models, GIS, and smart city tech.",
      icon: "Cpu",
    },
    {
      title: "Advisory & Strategic Consulting",
      desc: "Provides feasibility studies, PPP frameworks, risk analysis, and Vision 2030 alignment.",
      icon: "BarChart3",
    },
  ] as const satisfies readonly Department[];

  return (
    <div className="bg-white text-gray-800">
      <motion.div
        ref={sectionRef}
        initial={{ height: "120vh" }}
        animate={{ height: "60vh" }}
        transition={{ delay: 0.4, duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full relative overflow-hidden"
      >
        <div className="relative z-30 container py-10 flex flex-col justify-center items-center h-full max-w-4xl text-center">
          <h1 className="text-5xl font-bold text-slate-50">
            In-House Capabilities
            <br className="hidden sm:block" />
          </h1>
          <p className="mt-3 text-slate-200 max-w-2xl">
            Expertise You Can Trust. Delivery You Can Count On.
          </p>
        </div>
        <BgLayer color="bg-black/60 z-20" />
        <motion.img
          style={{ y: yTransform }}
          className="absolute scale-[1.3] inset-0 w-full h-full object-cover object-top"
          src="https://images.pexels.com/photos/259950/pexels-photo-259950.jpeg"
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
                At ALYUSR Engineering Consulting, we proudly deliver all major
                services in-house, ensuring tighter control over timelines,
                budgets, and quality at every stage of the project lifecycle.
                Our multidisciplinary teams work side by side, sharing
                resources, tools, and knowledge under one roof to offer clients
                a seamless and efficient experience. Whether it's feasibility
                studies, architectural design, engineering, or project
                supervision, we don’t outsource the core. We own it.
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
      <section className="relative py-24 px-6 sm:px-10 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              What Sets Our In-House Model Apart?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              ALYUSR’s integrated approach ensures precision, speed, and
              collaboration across all project touchpoints — led by expert teams
              under one roof.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {[
              "No Third-Party Dependency",
              "Integrated Collaboration",
              "End-to-End Delivery",
              "Streamlined Project Management",
            ].map((title, idx) => {
              const descriptions = [
                "All critical services are executed by ALYUSR’s internal teams, reducing risk and ensuring quality control from start to finish.",
                "Architects, engineers, planners, and consultants work together in real-time, minimizing delays and communication gaps.",
                "We cover every phase of the project: design, documentation, permitting, supervision, and post-construction support, within our firm.",
                "Clients benefit from a single point of contact and clear accountability throughout the project lifecycle.",
              ];
              return (
                <div
                  key={idx}
                  className="bg-white border border-sky-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition duration-300"
                >
                  <h3 className="text-xl font-semibold text-sky-800 mb-2">
                    {title}
                  </h3>
                  <p className="text-gray-700 text-base leading-relaxed">
                    {descriptions[idx]}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="">
        <div className="container my-24">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Core In-House Capabilities Include
          </h2>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Urban & Regional Planning",
              "Architectural & Interior Design",
              "Structural, MEP, and Infrastructure Engineering",
              "Landscape & Public Realm Design",
              "Environmental and Sustainability Studies",
              "Project Management & Construction Supervision",
              "Permitting & Code Compliance",
              "Digital Engineering (BIM, Simulation, GIS)",
              "Cost and Risk Management Consulting",
            ].map((cap, i) => (
              <li
                key={i}
                className="bg-sky-50 border border-sky-100 rounded-xl px-5 py-4 flex gap-3 items-start"
              >
                <span className="text-sky-600 mt-1">●</span>
                <p className="text-gray-700">{cap}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section>
        {" "}
        <div className="my-24 container">
          <h3 className="text-4xl font-bold text-center text-neutral-800">
            Tools & Certifications That Power Our Work
          </h3>
          <p className="text-center mb-12 mt-4">
            Our in-house teams are supported by industry-leading software and
            hardware, including:
          </p>

          <div className="grid lg:grid-cols-3 gap-8 ">
            {[
              {
                title: "Software Platforms",
                icon: <Layers className="w-7 h-7 text-indigo-600" />,
                bg: "from-indigo-100 to-indigo-50",
                items: ["AutoCAD", "Revit", "Civil 3D", "GIS"],
              },
              {
                title: "Survey & Design Equipment",
                icon: <SatelliteDish className="w-7 h-7 text-emerald-600" />,
                bg: "from-emerald-100 to-emerald-50",
                items: ["Trimble", "Topcon", "Leica Total Stations"],
              },
              {
                title: "Quality Standards",
                icon: <ShieldCheck className="w-7 h-7 text-rose-600" />,
                bg: "from-rose-100 to-rose-50",
                items: [
                  "ISO 9001",
                  "ISO 14001",
                  "ISO 45001",
                  "ISO 21500",
                  "ISO 31000",
                ],
              },
            ].map((block, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br ${block.bg} p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-white p-3 rounded-full border border-gray-200 shadow-sm">
                    {block.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {block.title}
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-gray-700 pl-2">
                  {block.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <BadgeCheck className="w-6 fill-green-700 stroke-white h-6 text-gray-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <div className="my-24 container">
          <h3 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why It Matters to Our Clients
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Faster response times",
                img: "https://images.pexels.com/photos/39396/hourglass-time-hours-sand-39396.jpeg",
              },
              {
                title: "Better coordination and design accuracy",
                img: "https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg",
              },
              {
                title: "Lower project risk and reduced cost",
                img: "https://images.pexels.com/photos/6801639/pexels-photo-6801639.jpeg",
              },
              {
                title: "Higher accountability and transparency",
                img: "https://images.pexels.com/photos/7567487/pexels-photo-7567487.jpeg",
              },
              {
                title: "Quick, end-to-end service",
                img: "https://images.pexels.com/photos/8762590/pexels-photo-8762590.jpeg",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group border bg-blue-500 border-gray-100 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
              >
                <div className="relative h-[300px] w-full bg-sky-100">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover  group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <p className="text-center text-gray-50 text-lg font-semibold group-hover:text-sky-700 transition-colors duration-300">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
